"use strict";

fetch("./companies.json")
    .then(function(paramResp) {
        return paramResp.json();
    })
    .then(function(paramData) {
        console.log(paramData[1].name);
    })