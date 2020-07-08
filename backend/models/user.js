const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    userType: {type: String, required: false}
})

module.exports = mongoose.model('User', userSchema);