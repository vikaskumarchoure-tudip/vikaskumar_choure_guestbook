var express = require('express');
var app = express();
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');
var config = require('config');
var User = require('app/models/user');
var Visitor = require('app/models/visitor');
var isEmpty = require('validate.io-empty');
var validator = require("email-validator");
var remove = require('remove');
var now = require("date-now");
var valid = require('validator');

var reg = function(req,res){

    var user_name = req.data.name;
    var user_email = req.data.email;
    var user_pass = req.data.pass;


    var user = new User();
    user.name = user_name;
    user.email = user_email;
    user.password = user_pass;

}