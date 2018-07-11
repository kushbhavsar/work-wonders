const express = require("express");
const path = require('path');
//const favicon = require('serve-favicon');
//const logger = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jobs = require("./routes/jobs");
const users = require("./routes/users");
const app = express();
const PORT = process.env.PORT || 3001;
var auth = require('./routes/auth');




// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(jobs);
app.use(users);
app.use('api/auth', auth);


//const db = require("./config/keys").localhost : 27017;
const db = "mongodb://localhost/work"


// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || db);
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/work', { promiseLibrary: require('bluebird')
})
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
