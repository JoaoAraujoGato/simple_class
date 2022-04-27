const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'cursos';
exports.modelName = 'course';

exports.getSchema = function (){
    const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            enum: ["Desenvolvimento Web", "Design", "Finanças", "Ensino e Estudo Acadêmico"],
            required: true,
        },
        ownerId: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        }
    }
    );
    return courseSchema;
}