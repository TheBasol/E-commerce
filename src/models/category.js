const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name_category: {
        type: String,
        required: true,
        maxlength: 30,
    },
    descrip_category: {
        type: String,
        maxlength: 100,
        required: true
    },
    abbreviation_category: {
        type: String,
        required: true,
        maxlength: 5,
    },
    status_category: {
        type: Boolean,
        required: true
    }
})


const Category = mongoose.model('Category', CategorySchema)
module.exports = Category
