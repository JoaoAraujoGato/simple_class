const mongoose = require('mongoose');

const { Schema } = mongoose;

exports.collectionName = 'quizess';
exports.modelName = 'quiz';

exports.getSchema = function (){
    const quizSchema = new Schema(
    {
        ownerId: {
            type: String,
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
        courseId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        question: {
            asking: String,
            correctAnswer: String,
            wrongAnswer: [
                {
                    answer: String,
                }
            ]
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    }
    );
    return quizSchema;
}