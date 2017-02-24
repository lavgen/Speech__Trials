
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var fs = require('fs');
var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize("your dog has fleas."));
// [ 'your', 'dog', 'has', 'fleas' ]
metaphone = natural.Metaphone, soundEx = natural.SoundEx;
var wordA = 'D';
var wordB = 'fonetix';
// To test the two words to see if they sound alike:

// parse application/x-www-form-urlencoded 
server.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
server.use(bodyParser.json())

if(metaphone.compare(wordA, wordB))
    console.log('they sound alike!');
// instruct the app to use the `bodyParser()` middleware for all routes

// this sets up the type of templating engine to use ( in this case hogan-express )
// other examples are jade, handlebars, mustache, etc.
server.engine('html', require('hogan-express'));
server.set('views', __dirname + '/views'); // set the folder where the views ( ie. template files ) are in
server.set('view engine', 'html');
// // what's the default folder for any requests to static files
// server.use(express.static(__dirname+'/public/mespeak/mespeak'));
server.use('/mespeak/', express.static(__dirname + '/mespeak/'));
server.use(express.static(__dirname+'/public/'));
// compress all responses
//for CORS errors, we are adding these to our header to resolve conflict with security
server.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements

server.get('/',function(req,res){
res.sendFile(__dirname + '/speech.html');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});
server.get('/1',function(req,res){
res.sendFile(__dirname + '/public/mespeak/multipartExample.html');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});

server.get('/t',function(req,res){
res.sendFile(__dirname + '/public/pocketsphinx/webapp/live.html');
// console.log(req.body);

  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});
server.get('/synth',function(req,res){
res.sendFile(__dirname + '/speechSynth.html');
// console.log(req.body);

  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});

// server.post('/v', function(req,res){
//  // console.log("request method :" + req.method);
//  var data=  req.body.transcript;
//   console.log("request body :" + data);
   
//   // res.end("OK");
// });
server.get('/2',function(req,res){
res.sendFile(__dirname + '/web-speech-api-master/index.html');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});
server.get('/3',function(req,res){
res.sendFile(__dirname + '/web-speech-api-master/phrase-matcher/index.html');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});

server.get('/4',function(req,res){
res.sendFile(__dirname + '/web-speech-api-master/speak-easy-synthesis/index.html');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});
server.get('/5',function(req,res){
res.render('index');
  // console.log(req.body.name) ;
  //__dirname : It will resolve to your project folder.
});


// listen for requests on a specified port
server.listen( 8080, function(err){
	if(err) console.log(err);
	else console.log('Running server on port 8080');
});


