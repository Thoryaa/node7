const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course_schema = new Schema({

    yourcourse: { type: String, required: true },
    insitatute: { type: String, required: true },
    teacher: { type: String, required: false },
    gradeC: { type: Number, required: false },

    sdateCourse: { type: Date, required: true },
    enddateCourse: { type: Date, required: true },
    imgCourse: { type: String, required: true }
});

const course = mongoose.model("course", course_schema);
module.exports = course;