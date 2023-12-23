import express from "express";
import QuizController from "../controller/quiz.controller.js";

// Create an instance of QuizController to access its methods
const quizController = new QuizController();

// Create a router instance
export const quizRouter = express.Router();

// Route: POST /quizzes
// Description: Create a new quiz
quizRouter.post("/", quizController.createQuiz);

// Route: GET /quizzes/active
// Description: Retrieve active quizzes
quizRouter.get("/active", quizController.getActiveQuiz);

// Route: GET /quizzes/:id/result
// Description: Get results of a specific quiz by ID
quizRouter.get("/:id/result", quizController.getResults);

// Route: GET /quizzes/all
// Description: Get all quizzes
quizRouter.get("/all", quizController.getAllQuizzes);
