/* globals console require */
"use strict";

const listMoviesUrl = "http://www.imdb.com/search/title?genres=fantasy&title_type=feature&sort=moviemeter,asc&page=1&view=simple&ref_=adv_prv";

const genres = ["fantasy", "horrer", "comedy", "action", "sci-fi"];

const request = require("request");

//const $ = require("jquery");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);


request(listMoviesUrl, function(err, res, body) {
    const selector = ".col-title span[title] a"; //IMDb in Compact view
    $("body").html(body);

    console.log($(selector).length);
});


//Telerik video until 34min...