import jwt from "jsonwebtoken";

import UserRepository from "../repository/user.repository.js";

// Create an instance of the UserRepository
const userRepository = new UserRepository();

// Controller for handling user-related operations
export default class UserController {

    // Method for user sign-in
    async signin(req, res) {
        try {
            // Validate user credentials using UserRepository's 'signin' method
            const validUser = await userRepository.signin(req.body);

            // If valid user credentials are found
            if (validUser) {

                // Generate a JWT token for the authenticated user with a 1-hour expiration
                const token = jwt.sign({ userID: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

                // Send token if credentials are correct
                return res.status(200).send(token);
            } else {
                // Send error message if credentials are incorrect
                return res.status(400).send({ message: "Wrong Credentials" });
            }
        } catch (err) {
            // Send server error if sign-in fails
            return res.status(500).send({ message: "Failed To SignIn" });
        }
    }

    // Method for user sign-up
    async signup(req, res) {
        try {
            // Create a new user using UserRepository's 'signup' method
            const newUser = await userRepository.signup(req.body);

            // Check if 'signup' method returns 'Email Already Exists'
            if (newUser == "Email Already Exists") {

                // Send conflict status if email exists
                return res.status(409).send({ message: "Email Already Exists" });
            } else {
                // Send user details if sign-up is successful
                return res.status(201).send(newUser);
            }
        } catch (err) {
            // Send server error if sign-up fails
            return res.status(500).send({ message: "Failed To SignUp" });
        }
    }

}