import QuizRepository from "../repository/quiz.repositoy.js";
const quizRepository = new QuizRepository();


export default class QuizController {

    // Method to create a new quiz
    async createQuiz(req, res) {
        try {
            // Create a new quiz using the QuizRepository's createQuiz method
            const newQuize = await quizRepository.createQuiz(req.body);

            // Return the newly created quiz with a success status code (201)
            return res.status(201).send(newQuize);

        } catch (err) {
            // If there's an error while creating the quiz, return an error status (500) with a message
            return res.status(500).send({ message: "Failed To Create Quiz" });
        }
    }

    // Method to fetch the active quiz
    async getActiveQuiz(req, res) {
        try {
            // Retrieve the active quiz using the QuizRepository's getActiveQuiz method
            const activeQuiz = await quizRepository.getActiveQuiz();

            // Return the active quizzes with a success status code (200)
            return res.status(200).send(activeQuiz);
        } catch (err) {
            // If there's an error while fetching the active quiz, return an error status (500) with a message
            return res.status(500).send({ message: "Failed To Fetch Active Quiz" });
        }
    }

    // Method to get the results of a specific quiz
    async getResults(req, res) {
        try {
            // Get the results of a specific quiz by its ID using the QuizRepository's getResults method
            const result = await quizRepository.getResults(req.params.id);

            if (result == "Quiz Not Found") {

                // Return a 404 status with a message if the quiz is not found
                return res.status(404).send({ message: "Quiz Not Found" });

            } else if (result == "Quiz result not yet available") {

                // Return a 404 status with a message if the quiz result is not yet available
                return res.status(404).send({ message: "Quiz result not yet available" });
            } else {

                // Return the quiz result with a success status code (200)
                return res.status(200).send({ answer: result });
            }

        } catch (err) {
            // If there's an error while fetching the quiz results, return an error status (500) with a message
            return res.status(500).send({ message: "Failed To Fetch Result" });
        }
    }

    // Method to get all quizzes
    async getAllQuizzes(req, res) {
        try {
            // Retrieve all quizzes using the QuizRepository's getAllQuizzes method
            const quizzes = await quizRepository.getAllQuizzes();

            // Return all quizzes with a success status code (200)
            return res.status(200).send(quizzes);
        } catch (err) {
            // If there's an error while fetching all quizzes, return an error status (500) with a message
            return res.status(500).send({ message: "Failed To Fetch Quizzes" });
        }
    }
}