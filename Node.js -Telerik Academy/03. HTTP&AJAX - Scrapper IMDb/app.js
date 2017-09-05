/* globals console require */
"use strict";

const listMoviesUrl = "http://www.imdb.com/search/title?genres=fantasy&title_type=feature&sort=moviemeter,asc&page=1&view=simple&ref_=adv_prv";

const genres = ["fantasy", "horrer", "comedy", "action", "sci-fi"];

//const request = require("request");
const httpRequester = require("./utils/http-requester");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

httpRequester.get(listMoviesUrl)
    .then((result) => {
        const selector = ".col-title span[title] a"; //IMDb in Compact view
        const body = result.body;
        $("body").html(body);

        let movies = [];
        $(selector).each((index, item) => {
            const $item = $(item);

            movies.push({
                title: $item.html(),
                url: $item.attr("href")
            });
        });
        console.log(movies);
    }).catch((err) => {});