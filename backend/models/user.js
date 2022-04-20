const mongoose = require('mongoose');

const { collectionName, modelName, getSchema } = require('../schemas/user.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);