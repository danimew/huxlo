/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var Part = require('../models/Part');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
    var examplePart = new Part();
    examplePart.id = "1";
    examplePart.height = 2;
    examplePart.depth = 3;
    examplePart.description = "This is an example part";

    var data = [examplePart];
    res.json(data);
});

module.exports = router;
