//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
// var favicon = require('serve-favicon');
// var path = require('path');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));
// app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(bodyParser.urlencoded({extended:true}));

let listItem = [];


app.get("/", function(req, res){
  let day = date.getDate();
  res.render("list",{kindOfDay: day, listToDo:listItem});
  // res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  let item = req.body.newItem;

    listItem.push(item);


  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
