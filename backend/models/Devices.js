const mongoose = require('mongoose');

// Create a dynamic key-value schema
const DevicesSchema = new mongoose.Schema({}, { strict: false, collection: 'Devices',timestamps: true });

// Create a model using the dynamic schema
const DevicesModel = mongoose.model('DynamicModel', DevicesSchema);

module.exports = DevicesModel;
