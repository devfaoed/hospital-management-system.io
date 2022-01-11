const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    disease: String,
    details: String,
    cure: String,
})

const Service = new mongoose.model("Service", serviceSchema);

module.exports =  Service;