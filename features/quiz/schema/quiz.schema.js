import mongoose from "mongoose";

// Define the schema structure for the QuizModel
const quizSchema = new mongoose.Schema({

    // Field for the question text, which is a required string
    question: { type: String, required: true },

    // Field for the array of options, which is required
    options: { type: Array, required: true },

    // Field for the index of the correct answer in the 'options' array, which is required
    rightAnswer: { type: Number, required: true },

    // Field for the start date of the quiz, which is required and of type Date
    startDate: { type: Date, required: true },

    // Field for the end date of the quiz, which is required and of type Date
    endDate: { type: Date, required: true }
});

// Create a Mongoose model named 'Quiz' using the defined schema
export const QuizModel = mongoose.model('Quiz', quizSchema);