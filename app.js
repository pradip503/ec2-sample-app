var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphs = require('express-handlebars');

var indexRouter = require('./routes/index');


var db= require('./config/db');

db.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//set default engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphs({defaultLayout: 'index',helpers: {}}));


app.use('/', indexRouter);

// set port
const PORT  = process.env.PORT || 4500;


// listen to server
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Listening on port ' + PORT);
    }
})

module.exports = app;
