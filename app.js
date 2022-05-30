
const puppeteer = require("puppeteer");
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const hbs = require("handlebars");
const fs = require("fs");
const router = require('./routes/routes')




let port = process.env.PORT;
if(port==null|| port==""){
  port =4000;
}
const app = express();
var htmlTemplate = "";

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", { layout: "index" });
});

app.use('',router)
app.listen(port, () => console.log(`App listening to port ${port}`));
