const mongoose = require('mongoose');

const { modelName, getSchema, collectionName } = require('../schemas/course.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);