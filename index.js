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
app.get('/', function(req, res){
    fetch('https://xkcd.com/info.0.json',)
    .then(res => res.json())
    .then(data => {
        res.render('index', {data:data});
    });
})


//function to get random number
function getRand(){
    let RandNum = Math.random() * (2000 +1) + 1;

    return Math.floor(RandNum);
}

//get information for random date
app.get('/randomComic', function(req, res){
    let num = getRand();
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