import { UserModel } from "../schema/user.schema.js";

// Repository handling user-related operations
export default class UserRepository {

    // Method for user sign-in
    async signin(userObj) {
        try {
            // Find a user by email and password in the UserModel
            return await UserModel.findOne({ email: userObj.email, password: userObj.password });
        } catch (err) {
            // Throw any encountered errors during sign-in process
            throw err;
        }
    }

    // Method for user sign-up
    async signup(userObj) {
        try {
            // Check if the user already exists based on the email in the UserModel
            const isExists = await UserModel.findOne({ email: userObj.email });

            // If the user with the email doesn't exist
            if (!isExists) {

                // Create a new user using the provided user object
                const newUser = new UserModel(userObj);

                // Save the new user to the UserModel
                return await newUser.save();
            } else {
                // Return message if the email is already registered
                return "Email Already Exists";
            }
        } catch (err) {
            // Throw any encountered errors during the sign-up process
            throw err;
        }
    }
}