const mongoose = require('mongoose');

// Create a dynamic key-value schema
const RoutesSchema = new mongoose.Schema({}, { strict: false, collection: 'routes',timestamps: true });

// Create a model using the dynamic schema
const RoutesModel = mongoose.model('RoutesModel', RoutesSchema);

module.exports = RoutesModel;
