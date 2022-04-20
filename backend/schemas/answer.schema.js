const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'respostas';
exports.modelName = 'answer';

exports.getSchema = function (){
    const answerSchema = new Schema(
    {
        quizId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        correction: {
            type: String,
            enum: ['Correta', 'Errada'],
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        correctAnswer: {
            type: String,
        }
    }
    );
    return answerSchema;
}