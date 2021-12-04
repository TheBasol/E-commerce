const mongoose = require('mongoose')
const Schema = mongoose.Schema
//recordatorio para poner la lib uui

const UserSchema = new Schema({
    user: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
        //agregar un validator
    },
    password: {
        type: String,
        required: true
    }
    //info: [{ type: Schema.Types.ObjectId, ref: 'InfoPersonal' }]
})

const PersonalInfo = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    first_name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    last_name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    address: {
        type: String,
        trim: true,
        required: true,
        maxlength: 75
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
        maxlength: 10
    },
    country: {
        type: String,
        default: 'Select County',
        enum: ['Ecuador','Argentina','Venezuela','Peru','Colombia','Mexico','otros']
    },
    city: {
        type: String,
        //colocar un enum de cada pais(filtro por Pais)
    }

})

const InfoPersonal = mongoose.model('InfoPersonal', PersonalInfo)
const User = mongoose.model('User', UserSchema)

module.exports = (User, InfoPersonal)