const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: String,
    message: String,
    number: Number,
    date: {
        type: Date,
        default: Date.now
    },
})

const Contact = new mongoose.model("Contact", serviceSchema);

module.exports =  Contact;