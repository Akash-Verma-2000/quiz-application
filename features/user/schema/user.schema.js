import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema({

    // User's name field, required
    name: { type: String, required: true },

    // User's email field, required
    email: { type: String, required: true },

    // User's password field, required
    password: { type: String, required: true }
});
// Create a model based on the defined schema
export const UserModel = mongoose.model('User', userSchema);