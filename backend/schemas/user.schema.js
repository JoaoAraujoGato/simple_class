const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'usuarios';
exports.modelName = 'user';

exports.getSchema = function (){
    const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        birth: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
        },
        cpf: {
            type: Number,
        },
    }
    );
    return userSchema;
};