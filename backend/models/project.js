const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    tools: {
        type: [String],
        required: true
    },
    icon: {
        type: String,
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    },
    preview: {
        type: String,
    },
})
module.exports = mongoose.model("project", projectSchema)