// const express = require('express');
// const bodyParser = require("body-parser");

// var app = express();

// // setup handlebars view engine
// const handlebars = require('express-handlebars');
// app.set('view engine', 'handlebars');
// app.engine('handlebars', handlebars({
//     layoutsDir: `${__dirname}/views/layouts`
// }));

// app.set('views', __dirname + '/views');
// app.use(express.static("static"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.render('main',{layout: 'index'});
// });

// app.listen(4000, (req, res) => {
//     console.log("Server is running...")
// });
//Loads the express module




const puppeteer = require('puppeteer');
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require("body-parser");
const port = 4000;
const app = express();
var htmlTemplate = '';


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});
app.post('/', (req, res) => {

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


    htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html>
    <head>
    
        <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    
        <meta name="keywords" content="" />
        <meta name="description" content="" />
    
        <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" /> 
    
    </head>
        <style>
            /*
    ---------------------------------------------------------------------------------
        STRIPPED DOWN RESUME TEMPLATE
        html resume
    
        v0.9: 5/28/09
    
        design and code by: thingsthatarebrown.com 
                            (matt brown)
    ---------------------------------------------------------------------------------
    */
    
    
    .msg { padding: 10px; background: #222; position: relative; }
    .msg h1 { color: #fff;  }
    .msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }
    .msg a:hover { background: #266400; }
    
    /* //-- yui-grids style overrides -- */
    body { font-family: Georgia; color: #444; }
    #inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }
    .yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }
    
    /* //-- header, body, footer -- */
    #hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }
    #hd h2 { text-transform: uppercase; letter-spacing: 2px; }
    #bd, #ft { margin-bottom: 2em; }
    
    /* //-- footer -- */
    #ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }
    #ft p { margin-bottom: 0; text-align: center;   }
    
    /* //-- core typography and style -- */
    #hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }
    h2 { font-size: 152% }
    h3, h4 { font-size: 122%; }
    h1, h2, h3, h4 { color: #333; }
    p { font-size: 100%; line-height: 18px; padding-right: 3em; }
    a { color: #990003 }
    a:hover { text-decoration: none; }
    strong { font-weight: bold; }
    li { line-height: 24px; border-bottom: 1px solid #ccc; }
    p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }
    p.enlarge span { color: #000 }
    .contact-info { margin-top: 7px; }
    .first h2 { font-style: italic; }
    .last { border-bottom: 0 }
    
    
    /* //-- section styles -- */
    
    a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }
    a#pdf:hover { background: #222; }
    
    .job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }
    .job h4 { position: absolute; top: 0.35em; right: 0 }
    .job p { margin: 0.75em 0 3em 0; }
    
    .last { border: none; }
    .skills-list {  }
    .skills-list ul { margin: 0; }
    .skills-list li { margin: 3px 0; padding: 3px 0; }
    .skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }
    .talent { width: 32%; float: left }
    .talent h2 { margin-bottom: 6px; }
    
    #srt-ttab { margin-bottom: 100px; text-align: center;  }
    #srt-ttab img.last { margin-top: 20px }
    
    /* --// override to force 1/8th width grids -- */
    .yui-gf .yui-u{width:80.2%;}
    .yui-gf div.first{width:12.3%;}
    
    
    
        </style>
    </head>
    <body>
    
    <div id="doc2" class="yui-t7">
        <div id="inner">
        
            <div id="hd">
                <div class="yui-gc">
                    <div class="yui-u first">
                        <h1>${name}</h1>
                        <h2>${jobPosition}</h2>
                    </div>
    
                    <div class="yui-u">
                        <div class="contact-info">
                            <h3>${email}</h3>
                            <h3>${phoneNumber}</h3>
                        </div><!--// .contact-info -->
                    </div>
                </div><!--// .yui-gc -->
            </div><!--// hd -->
    
            <div id="bd">
                <div id="yui-main">
                    <div class="yui-b">
    
                        <div class="yui-gf">
                            <div class="yui-u first">
                                <h2>Profile</h2>
                            </div>
                            <div class="yui-u">
                                <p class="enlarge">
                                ${profile}                               
                                 </p>
                            </div>
                        </div><!--// .yui-gf -->
    
                        <div class="yui-gf">
                            <div class="yui-u first">
                                <h2>Skills</h2>
                            </div>
                            <div class="yui-u">
    
                                    <div class="talent">
                                        <h2>${skillsTitle}</h2>
                                        <p>
                                        ${skillsdescription}
                                        </p>
                                    </div>
    
                                    
                            </div>
                        </div><!--// .yui-gf -->
    
                        <div class="yui-gf">
                            <div class="yui-u first">
                                <h2>Technical</h2>
                            </div>
                            <div class="yui-u">
                                <ul class="talent">
                                    <li>${technicalSkill}</li>
                                </ul>
    
                               <!-- <ul class="talent">
                                    <li>Jquery</li>
                                    <li>PHP</li>
                                    <li class="last">CVS / Subversion</li>
                                </ul>
    
                                <ul class="talent">
                                    <li>OS X</li>
                                    <li>Windows XP/Vista</li>
                                    <li class="last">Linux</li>
                                </ul>
                                -->
                            </div>
                        </div><!--// .yui-gf-->
    
                        <div class="yui-gf">
        
                            <div class="yui-u first">
                                <h2>Experience</h2>
                            </div><!--// .yui-u -->
    
                            <div class="yui-u">
    
                                <div class="job">
                                    <h2>${company}</h2>
                                    <h3>${positon}</h3>
                                    <h4>${from}-${to}</h4>
                                    <p>${jobDescription} </p>
                                </div>
                                <!--
                                <div class="job">
                                    <h2>Apple Inc.</h2>
                                    <h3>Senior Interface Designer</h3>
                                    <h4>2005-2007</h4>
                                    <p>Progressively reconceptualize multifunctional "outside the box" thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits. </p>
                                </div>
    
                                <div class="job">
                                    <h2>Microsoft</h2>
                                    <h3>Principal and Creative Lead</h3>
                                    <h4>2004-2005</h4>
                                    <p>Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials. </p>
                                </div>
    
    
                                <div class="job last">
                                    <h2>International Business Machines (IBM)</h2>
                                    <h3>Lead Web Designer</h3>
                                    <h4>2001-2004</h4>
                                    <p>Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent e-tailers with timely e-markets.</p>
                                </div>
                                -->
    
                            </div><!--// .yui-u -->
                        </div><!--// .yui-gf -->
    
    
                        <div class="yui-gf last">
                            <div class="yui-u first">
                                <h2>Education</h2>
                            </div>
                            <div class="yui-u">
                                <h2>${university} - ${address}</h2>
                                <h3><strong>${gpa} GPA</strong> </h3>
                            </div>
                        </div><!--// .yui-gf -->
    
    
                    </div><!--// .yui-b -->
                </div><!--// yui-main -->
            </div><!--// bd -->
    
            <div id="ft">
                <p>JPrabesh &mdash; <a href="regmiprabesh.com.np">regmiprabesh.com.np</a> &mdash; (+977) - 9841993575</p>
            </div><!--// footer -->
    
        </div><!-- // inner -->
    
    
    </div><!--// doc -->
    
    
    </body>
    </html>
    
    `;
    console.log(htmlTemplate)
    async function generatePdf() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.setContent(htmlTemplate)
    // We use pdf function to generate the pdf in the same folder as this file.
    await page.pdf({ path: 'Created CV/cv.pdf', format: 'A4', printBackground: true })
    await browser.close();
    console.log("PDF Generated");
    }
    generatePdf();
    const file = `${__dirname}/Created CV/cv.pdf`;
  res.download(file);
});

app.listen(port, () => console.log(`App listening to port ${port}`));