var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test:test1234@todo-qqfes.mongodb.net/test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

var locations = new mongoose.Schema({
    lat: String,
    lng: String,
  });

  var loc = mongoose.model('locations', locations);

  

var urlencodedParser = bodyparser.urlencoded({ extended: false });

app.use('/assets',express.static('./public/assets'));

app.get('/',function(req,res){
    res.render('index');
});


app.get('/login',function(req,res){
    res.render('login');
});

app.post('/login',urlencodedParser,async function(req,res){
    console.log(req.body);
    var newloc =await  loc(req.body).save();
    
   // res.render('sample');
});

app.set('view engine','ejs');
var PORT = process.env.PORT || 3000;
app.listen(PORT);


console.log("you are listening to port 3000");