const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*DB Connection using moongoose*/
mongoose.connect('mongodb://localhost:27017/test2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Voila, you are connected to the database...');
});


app.use(express.static(__dirname + './../dist'));
/*Set port to 3000*/
app.listen('3000', function() {
  console.log('Listening to port 3000...');
});

/*Define routes to handle all incoming routes*/
routes(app);