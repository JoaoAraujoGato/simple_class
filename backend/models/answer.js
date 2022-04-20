const mongoose = require('mongoose');

const { collectionName, modelName, getSchema } = require('../schemas/answer.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);