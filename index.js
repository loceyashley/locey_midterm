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
app.get('/CurrentComic', function(req, res){
    let CurrentComicData;
    fetch('https://xkcd.com/info.0.json',)
    .then(res => res.json())
    .then(data => {
        CurrentComicData = data;
        res.json(CurrentComicData);
    });
})


//server setup 
app.listen(port,function(){
    console.log('listening on ' + port)
});