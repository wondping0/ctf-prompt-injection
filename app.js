const express = require("express");
const path = require("path");
require("dotenv").config();

const session = require("express-session");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET, // ganti dengan secret aman
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 jam
  })
);

// Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const chatRoutes = require('./routes/challenge.route');
app.use('/', chatRoutes);

// Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`CTF Challenge running at http://localhost:${PORT}`);
});
