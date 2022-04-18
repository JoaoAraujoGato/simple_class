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
        },
        ownerId: {
            type: ObjectId,
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