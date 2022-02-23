const express = require("express");
const multer = require("multer");
const mogoose = require("mongoose");
const Skills = require("./models/skills");
const Education = require("./models/education");
const Course = require("./models/course");
const Experinces = require("./models/experinces");
const Personal = require("./models/personals");


const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.static("public/"));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
mogoose.connect("mongodb://localhost:27017/coy").then((result) => {
        // console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

app.get("/", auth, (req, res) => {
    res.render("index");
});

app.get('/login', function(req, res, next) {
    res.render('login');
});
app.get('/signup', function(req, res, next) {
    res.render('signup');
});
app.get('/education', function(req, res, next) {
    res.render('education');
});
app.get('/dashboard', function(req, res, next) {
    res.render('dashboard');
});
app.get('/course', function(req, res, next) {
    res.render('course');
});
app.get('/skills', function(req, res, next) {
    res.render('skills');
});
app.get('/experinces', function(req, res, next) {
    res.render('experinces');
});
app.get('/porto', function(req, res, next) {
    res.render('portofo');
});


app.post("/add_educations", (req, res) => {
    console.log(req.body);

    const s = new Education({
        yourstudy: req.body.yourstuding,

        sdatestudy: req.body.startDateEdu,
        enddate: req.body.endDateEdu,
        img_study: req.body.Eduimg,

    });

    s.save();


    res.render("user_info", { info: req.body });
    res.end();
});

app.post("/add_experinces", (req, res) => {

    console.log(req.body);

    const s = new Experinces({
        yourexp: req.body.Expname,

        sdate: req.body.startDate,
        enddate: req.body.EndDate,
        img_exp: req.body.Eximg,

    });

    s.save();


    res.render("user_info", { info: req.body });
    res.end();


});
app.post("/add_personal", (req, res) => {
    console.log(req.body);

    const s = new Personal({
        fname: req.body.fname,
        sname: req.body.sname,
        lname: req.body.lname,
        email: req.body.email,

        phone: req.body.phone,
        country: req.body.country,
        img: req.body.image,
        gender: req.body.gender

    });

    s.save();


    res.render("user_info", { info: req.body });
    res.end();


});
app.post("/add_skills", (req, res) => {
    console.log(req.body);

    const s = new Skills({
        yourskills: req.body.skillsName,
        percent: req.body.skillsPercent

    });

    s.save();


    res.render("user_info", { info: req.body });
    res.end();


});
app.post("/add_courses", (req, res) => {
    console.log(req.body);

    const s = new Course({
        yourcourse: req.body.yourcourse,
        insitatute: req.body.instatuteNe,
        teacher: req.body.tname,

        gradeC: req.body.gradeCourse,

        sdateCourse: req.body.startDateco,
        enddateCourse: req.body.endDateco,
        imgCourse: req.body.gradFile,

    });

    s.save();


    res.render("user_info", { info: req.body });
    res.end();


});

function auth(req, res, next) {
    next();
}

app.listen("5000");