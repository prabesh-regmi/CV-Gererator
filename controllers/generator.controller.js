const puppeteer = require("puppeteer");
// const express = require("express");
// const { engine } = require("express-handlebars");
// const bodyParser = require("body-parser");
const hbs = require("handlebars");
const fs = require("fs"); 
 
 generateCV= async (req, res) => {
    const name = req.body.name.toUpperCase();
    const jobPosition = req.body.jobPosition.toUpperCase();
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const profile = req.body.profile;
    const skillsTitle = req.body.skillsTitle;
    const skillsdescription = req.body.skillsdescription;
    const technicalSkill = req.body.technicalSkill;
    const company = req.body.company;
    const from = req.body.from;
    const to = req.body.to;
    const positon = req.body.positon;
    const jobDescription = req.body.jobDescription;
    const university = req.body.university;
    const address = req.body.address;
    const gpa = req.body.gpa;
    const user = {
      name,
      jobPosition,
      email,
      phoneNumber,
      profile,
      skillsTitle,
      skillsdescription,
      technicalSkill,
      company,
      from,
      to,
      positon,
      jobDescription,
      university,
      address,
      gpa,
    };
  
    const temp = fs.readFileSync(
      `${__dirname}/../views/template.handlebars`,
      "utf-8",
      () => console.log(temp)
    );
  
    compile = async (user) => {
      return hbs.compile(temp)(user);
    };
  
    // console.log(htmlTemplate)
    const fName = `${__dirname}/../Created CV/${Date.now()}_CV.pdf`;
    async function generatePdf() {
      try {
        const browser = await puppeteer.launch({
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();
        const content = await compile(user);
        await page.setContent(content);
  
        // We use pdf function to generate the pdf in the same folder as this file.
        await page.pdf({
          path: `${fName}`,
          format: "A4",
          printBackground: true,
        });
        await browser.close();
        console.log("PDF Generated");
        const response = await res.download(fName);
        console.log(response);
      } catch (e) {
        console.log("this is error:");
      }
    }
    generatePdf();
  
    console.log(fName);
}


module.exports ={generateCV}