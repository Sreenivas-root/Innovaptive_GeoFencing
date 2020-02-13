var express = require('express');

var app = express();


//app.use('/assets',express.static('./public/assets'));

app.get('/',function(req,res){
    res.render('index');
});


app.set('view engine','ejs');
app.listen(3000);


console.log("you are listening to port 3000");