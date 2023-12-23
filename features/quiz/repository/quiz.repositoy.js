import { QuizModel } from "../schema/quiz.schema.js";

export default class QuizRepository {

    // Method to create a new quiz
    async createQuiz(quizObj) {
        try {
            // Create a new quiz document using the provided data
            const newQuiz = new QuizModel(quizObj);

            // Save the new quiz to the database and return the result
            return await newQuiz.save();

        } catch (err) {
            // Throw an error if there's an issue during the quiz creation process
            throw err;
        }
    }

    // Method to retrieve the active quiz based on the current time
    async getActiveQuiz() {
        try {
            // Get the current date in ISO format
            const currentDate = new Date().toISOString();

            // Find and return the active quiz based on start and end date criteria
            return await QuizModel.find({ startDate: { $lte: currentDate }, endDate: { $gte: currentDate } }, { rightAnswer: 0, __v: 0 });
        } catch (err) {
            // Throw an error if there's a problem fetching the active quiz
            throw err;
        }
    }

    // Method to get the results of a specific quiz by ID
    async getResults(quizId) {
        try {
            // Find the quiz by its ID
            const quiz = await QuizModel.findById(quizId);

            // If the quiz is not found, return an appropriate message
            if (!quiz) {
                return "Quiz Not Found";
            }

            // Calculate the time 5 minutes after the quiz end time
            const currentTime = new Date();
            const quizEndTimePlus5Minutes = new Date(quiz.endDate);
            quizEndTimePlus5Minutes.setMinutes(quizEndTimePlus5Minutes.getMinutes() + 5);

            // Check if the current time is beyond 5 minutes after the quiz end time
            if (currentTime >= quizEndTimePlus5Minutes) {

                // If yes, return the answer based on the rightAnswer index
                const index = quiz.rightAnswer;
                return quiz.options[index]
            } else {
                // If not, indicate that the quiz result is not yet available
                return "Quiz result not yet available";
            }
        } catch (err) {
            // Throw an error if there's an issue while fetching the quiz results
            throw err;
        }
    }

    // Method to retrieve all quizzes, excluding 'rightAnswer' field and (__v)
    async getAllQuizzes() {
        try {
            // Fetch all quizzes and exclude 'rightAnswer' and (__v) fields
            return await QuizModel.find({}, { rightAnswer: 0, __v: 0 });
        } catch (err) {
            // Throw an error if there's a problem while fetching all quizzes
            throw err;
        }
    }
}