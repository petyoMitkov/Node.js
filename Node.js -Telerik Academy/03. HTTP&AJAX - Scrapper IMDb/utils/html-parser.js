/* globals mobule require Promise*/
"use strict";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);


module.exports.parsSimpleMovie = (selector, html) => {
    $("body").html(html);
    let items = [];

    $(selector).each((index, item) => {
        const $item = $(item);
        items.push({
            title: $item.html(),
            url: $item.attr("href")
        });
    });

    return Promise.resolve()
        .then(() => {
            return items;
        });
};