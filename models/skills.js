const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skills_schema = new Schema({

    yourskills: { type: String, required: true },
    percent: { type: Number, required: true },

});

const skills = mongoose.model("skills", skills_schema);
module.exports = skills;