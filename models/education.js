const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const education_schema = new Schema({

    yourstudy: { type: String, required: true },
    sdatestudy: { type: Date, required: true },
    enddate: { type: Date, required: true },
    img_study: { type: String, required: true }
});

const education = mongoose.model("education ", education_schema);
module.exports = education;