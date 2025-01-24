const mongoose = require('mongoose');

// Define the Role Schema
const roleSchema = new mongoose.Schema({
    roleId: {
        type: Number,
        required: true,
        unique: true,  // Ensures unique roleId for each role
    },
    roleName: {
        type: String,
        required: true,
        unique: true,  
    },
});

// Create the Role model using the roleSchema
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
