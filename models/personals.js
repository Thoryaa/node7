const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student_schema = new Schema({

    fname: { type: String, required: true },
    sname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    phone: { type: Number, require: true },
    country: { type: String, required: true },
    img: { type: String, required: true },
    gender: { type: String, required: true }
});

const students = mongoose.model("students", student_schema);
module.exports = students;