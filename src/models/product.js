const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name_product: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    description_product:{
        type: String,
        required: true
    },
    number_stock: {
        type: Number,
        required: true
    },
    category_product: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    status_product: {
        type: Boolean,
        required: true,
    },
    abbreviation_prod: {
        type: String,
        required: true
    }
})


const Product = mongoose.model('Product', ProductSchema)
module.exports = Product