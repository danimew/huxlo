/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  console.log('in get index');
  res.sendfile('views/index.html');
});

module.exports = router;
