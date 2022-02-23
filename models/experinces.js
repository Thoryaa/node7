const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experinces_schema = new Schema({

    yourexp: { type: String, required: true },
    sdate: { type: Date, required: true },
    enddate: { type: Date, required: true },
    img_exp: { type: String, required: true }
});

const experinces = mongoose.model("experinces", experinces_schema);
module.exports = experinces;