const express = require("express");

const routes = express.Router();

let data = {

    locations: [
        {
            name: "Pune",
            shortDes: "Sample desc",
        },
        {
            name: "MUMba",
            shortDes: "Sample desc",
        },
        {
            name: "AAA",
            shortDes: "Sample desc",
        }
    ]
}

routes.get("/", (req, res) => res.json(data));

module.exports = routes;