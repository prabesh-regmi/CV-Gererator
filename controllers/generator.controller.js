const puppeteer = require("puppeteer");
// const express = require("express");
// const { engine } = require("express-handlebars");
// const bodyParser = require("body-parser");
const hbs = require("handlebars");
const fs = require("fs");
const res = require("express/lib/response");

generateCV = async (req, res) => {
  console.log(req.body.name);
  const user = req.body;

  const temp = fs.readFileSync(
    `${__dirname}/../views/template.handlebars`,
    "utf-8",
    () => console.log(temp)
  );

  compile = async (user) => {
    return hbs.compile(temp)(user);
  };

  // console.log(htmlTemplate)
  const fileName = `${Date.now()}_CV.pdf`;
  async function generatePdf() {
    try {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
      const page = await browser.newPage();
      const content = await compile(user);
      await page.setContent(content);

      // We use pdf function to generate the pdf in the same folder as this file.
      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
      });
      

      await browser.close();
      console.log("PDF Generated");
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      const response = await res.send(pdf);
      
      console.log(pdf);
    } catch (e) {
      console.log("this is error:" + e);
    }
  }
  generatePdf();
}
module.exports = { generateCV }