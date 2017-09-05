/* globals console require */
"use strict";

const listMoviesUrl = "http://www.imdb.com/search/title?genres=fantasy&title_type=feature&sort=moviemeter,asc&page=1&view=simple&ref_=adv_prv";

const genres = ["fantasy", "horrer", "comedy", "action", "sci-fi"];

//const request = require("request");
const httpRequester = require("./utils/http-requester");
const htmlParser = require("./utils/html-parser");

httpRequester.get(listMoviesUrl)
    .then((result) => {
        const selector = ".col-title span[title] a"; //IMDb in Compact view
        const html = result.body;
        return htmlParser.parsSimpleMovie(selector, html);
    })
    .then((movies) => {
        console.log(movies);
    })
    .catch((err) => {
        console.log(err, { colors: true });
    });