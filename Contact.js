//  import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = require('mongoose')
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 9,
        maxlength:15,
    }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact