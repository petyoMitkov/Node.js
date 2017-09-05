/* globals console require */
"use strict";

const os = require("os");

const genres = ["fantasy", "horrer", "comedy", "action", "sci-fi"];
const pagesCount = 2;

const httpRequester = require("./utils/http-requester");
const htmlParser = require("./utils/html-parser");
const dataStructure = require("./data-structures/queue");

let urlsQueue = dataStructure.getQueue();

genres.forEach(genre => {
    for (let i = 0; i < pagesCount; i += 1) {
        let url = `http://www.imdb.com/search/title?genres=${genre}&title_type=feature&sort=moviemeter,asc&page=${i+1}&view=simple&ref_=adv_prv`;
        urlsQueue.push(url);
    }
});

const fs = require("fs");
let writableStream = fs.createWriteStream("./output.js", "utf8");


function getMoviesFromUrl(url) {
    console.log("Working with: " + url);
    httpRequester.get(url)
        .then((result) => {
            const selector = ".col-title span[title] a"; //IMDb in Compact view
            const html = result.body;
            return htmlParser.parsSimpleMovie(selector, html);
        })
        .then((movies) => {
            writableStream.write(JSON.stringify(movies));
            writableStream.write(os.EOL);
            console.log(movies.length);
            //start with next page
            if (urlsQueue.isEmpty()) {
                writableStream.end();
                return;
            }
            setTimeout(() => {
                getMoviesFromUrl(urlsQueue.pop());
            }, 2000);

        })
        .catch((err) => {
            console.log(err, { colors: true });
        });
}

getMoviesFromUrl(urlsQueue.pop());