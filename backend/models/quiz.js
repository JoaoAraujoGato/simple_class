const mongoose = require('mongoose');

const { collectionName, modelName, getSchema } = require('../schemas/quiz.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);