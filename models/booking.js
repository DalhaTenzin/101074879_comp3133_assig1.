const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'username must be unique']
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        match: [/^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/,
            'Please enter a valid email address']
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
    },

});


module.exports = mongoose.model('user', userSchema);
