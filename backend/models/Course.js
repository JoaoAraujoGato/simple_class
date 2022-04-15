const mongoose = require('mongoose');

const { collectionName, modelName, getSchema } = require('../schemas/course.schema');

module.exports = mongoose.model(modelName, getSchema());