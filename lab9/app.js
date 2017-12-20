const express = require("express");
const users = require('./memory/user').users;
const password = require('./memory/password.js');

const app = express();

const expressHandlebars = require("express-handlebars");
const handlebars = require("handlebars");
const handlebarsInstance = expressHandlebars.create({
  defaultLayout: "main",
  helper: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === "number")
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

app.engine("handlebars",handlebarsInstance.engine);
app.set("view engine", "handlebars");

const cookieParser = require('cookie-parser');
app.use(cookieParser());


const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {

  if (req.path == "/logout") {
    return next();
  }

  if (!req.cookies.user && req.path == "/private") {
      return res.redirect('/');
  } 
  
  if (req.cookies.user && req.path != "/private") {
    return res.redirect('/private');
  }
  
  next();
});



app.get('/', (req, res) => {

  const cookies = req.cookies;

  if (req.cookies.loginFailure) {
    const errorMessage = req.cookies.loginFailure;
    res.clearCookie('loginFailure');

    return res.render('login', {
      message: errorMessage,
    })
  }

  return res.render('login');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const plainTextPassword = req.body.password;
  
  var theUser; 
  users.forEach( user => {
    if (user.username == username) {
      theUser = user;
    }
  });

  if (!theUser) {
      // show error on login page
      const options = {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      }
      res.cookie('loginFailure', 'Invalid Username', options);
      return res.redirect(303, '/');
  }

  password.compare(plainTextPassword, theUser.hashedPassword).then(correct => {
  
    if (correct) {

      // redirect to user page
      const options = {
        maxAge: 1000 * 60 * 15,
        httpOnly: true,
      }
      res.cookie('user', theUser._id, options);

      res.clearCookie('loginFailure');
      res.redirect(303, '/private');
    } else {
      // Set a loginFailure error message
      const options = {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      }
      res.cookie('loginFailure', 'Invalid Password', options);

      // Invalidate a current login cookie
      res.clearCookie('user');
      res.redirect(303, '/');
    }
  });
});

app.get('/private', (req, res) => {
  var theUser;
  const userID = req.cookies.user;

  users.forEach(user => {
    if (user._id == userID) {
      theUser = user;
    }
  });

  if (!theUser) {
    // Invalidate the user cookie
    const expired = {
      maxAge: (new Date()),
      httpOnly: true,
    }
    res.cookie('user', theUser._id, expired);

    // redirect to login
    return res.redirect(303, '/');
  }

  return res.render('user', {
    user: theUser,
  });
});

app.get('/logout', (req, res) => {
  // Invalidate a current login cookie
  res.clearCookie('user');
  res.redirect(303, '/');

});


app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
