//require express
var express = require('express');
//require body parser
var bodyParser = require ("body-parser");
//require node-fetch
 var fetch = require('node-fetch');
//create express object call express
var app = express();
//create port information
const port = process.env.PORT || 3000;
//tells application to use ejs for templates
app.set('view engine', 'ejs');
//make styles pulic
app.use(express.static("Public"));
//tell app to use body parser
app.use(bodyParser.urlencoded({extended: true}));

//get homepage
app.get('/', function(req,res){
    //return to homepage
    res.render('index');
})

//fetch comic information and send to front end as JSON data
app.get('/currentComic', function(req, res){
    fetch('https://xkcd.com/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('currentComic', {data:data});
    });
})

//get information for random date
app.get('/randomComic', function(req, res){
    try{
    let num = Math.random() * (2800 - 1) + 1;
    }
    catch{ 
        console.log("can not do this");
    };
    fetch('https://xkcd.com/' +num + '/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('randomComic', {data:data});
    });
})



//server setup 
app.listen(port,function(){
    console.log('listening on ' + port)
});