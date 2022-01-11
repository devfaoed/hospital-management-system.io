const mongoose = require("mongoose");
const express = require("express");
const { Route } = require("express");
const routes = express.Router();


routes.get("/", function(req, res){
    res.render("index");
})

routes.get("/home", function(req, res){
    res.redirect("/");
})

routes.get("/services", function(req, res){
    res.render("services");
})

routes.get("/blog", function(req, res){
    res.render("blog");
})

routes.get("/about", function(req, res){
    res.render("about");
})

routes.get("/contact", function(req, res){
    res.render("contact");
})


module.exports =  routes;