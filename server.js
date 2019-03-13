var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "home.html" );
  // res.send('Hello Welcome to nodejs');
})

app.get('/index', function (req, res) {
  console.log(__dirname);
   res.sendFile( __dirname + "/" + "index.html" );
 })
app.get('/about', function (req, res) {
   res.sendFile( __dirname + "/" + "about.html" );
 })
app.get('/contact', function (req, res) {
   res.sendFile( __dirname + "/" + "contact.html" );
 })

app.get('/hello', function (req, res) {
   res.send('Hello World from hello');
})
app.get('/aaron', function (req, res) {
   res.send('Hello Arron , Howdy ? ');
})
app.get('/go', function (req, res) {
   res.send('please go to another page');
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })



