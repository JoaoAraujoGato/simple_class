const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'usuarios';
exports.modelName = 'user';

exports.getSchema = function (){
    const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        birth: {
            type: Date,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
        },
        cpf: {
            type: Number,
        },
        firebase_id: {
            type: String,
            required: true,
        },
    }
    );
    return userSchema;
};