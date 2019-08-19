const path = require('path');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const passport = require('passport')
// const favicon = require('express-favicon');

// app.use(favicon(__dirname + '/public/favicon.png'));

const users = require("./routes/api/users");
// const follows = require("./routes/api/follows?");

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('frontend/build'));
   app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
   })
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB Successfully"))
.catch( err => console.log(err))

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
// app.use('/api/follows', follows);
// app.get("/", (req, res) => res.send("Hello World"));

