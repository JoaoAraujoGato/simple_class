const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'usuarios';
exports.modelName = 'user';

exports.getSchema = function (){
    const userSchema = new Schema(
    {
        type: {
            type: String,
            enum: ['Administrador', 'Professor', 'Aluno'],
            required: true,
        },
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
        user_course: [
            {
                course_id: {
                    type: String,
                },
            },
        ],
        firebase_id: {
            type: String,
            required: true,
        },
    }
    );
    return userSchema;
};