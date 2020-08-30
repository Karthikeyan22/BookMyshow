const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const app = express();
require("./config/db");

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials")
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.status(200).render("home", {
    layout: "hero",
    title: "BookMyShow"
  });
});

app.get("/SelectSeat", async (req, res) => {
  try {
    res.status(200).render("SelectSeat.hbs", {
      layout: "hero",
      title: "SelectSeat"
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("/userlogin", async (req, res) => {
  try {
    res.status(200).render("userlogin.hbs", {
      layout: "hero",
      title: "Sigin"
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});
app.get("/adminlogin", async (req, res) => {
  try {
    res.status(200).render("adminlogin.hbs", {
      layout: "hero",
      title: "Signin"
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("/userlogin", async (req, res) => {
  try {
    res.status(200).render("userlogin.hbs", {
      layout: "hero",
      title: "Signin"
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("/usersignup", async (req, res) => {
  try {
    res.status(200).render("usersignup.hbs", {
      layout: "hero",
      title: "Signin"
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});

app.listen(8080, () => {
  console.log("server running");
});
