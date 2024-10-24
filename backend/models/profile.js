const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model("profile", profileSchema)