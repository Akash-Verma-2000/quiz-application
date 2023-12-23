import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

// Importing Swagger and the API documentation file
import swagger from 'swagger-ui-express';
import apiDocs from "./swagger.json" assert {type: 'json'};

// Middleware for JWT authorization
import jwtAuthoriser from "./middlewares/jwt.middleware.js";

// MongoDB connection setup
import { connectToMongoose } from "./configurations/mongoose.config.js";

// Importing routers for quizzes and user-related routes
import { quizRouter } from "./features/quiz/routes/quiz.route.js";
import { userRouter } from "./features/user/route/user.route.js";
const server = express();

//CORS policy configurations
server.use(cors());

//Load all the env variables
dotenv.config();

// Serve API documentation using Swagger UI
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

// Parse incoming JSON requests
server.use(bodyParser.json());

// Define routes

// JWT authorization middleware for quizzes route
server.use("/quizzes", jwtAuthoriser, quizRouter);

// User routes
server.use("/user", userRouter);

// Handle undefined routes with a 404 message
server.use((req, res) => {
    return res.status(404).send({ message: "API Not Found" });
})

// Start the server and listen on port 5100
server.listen(5100, () => {
    // Connect to MongoDB
    connectToMongoose();
    console.log("The server is listeing on port 5100");
})