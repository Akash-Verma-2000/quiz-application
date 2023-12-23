# Quiz Application

The Quize Application is a robust platform that facilitates the creation, management, and participation in quizzes. This application offers users the ability to create quizzes, view all active quizzes, view all quizzes, and view the results. The system integrates JWT-based user authentication for secure sign-in and sign-up functionalities. Additionally, API endpoints are well-documented using Swagger UI for enhanced usability.


## Technologies

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-darkred?style=for-the-badge&logoColor=white)


## Authentication & Authorization

- Using JWT tokens for authentication upon login.

- Implement middleware for authorization, ensuring only authorized users can access specific endpoints.


## Error Handling

- Implementing meaningful error responses and status codes for various scenarios (e.g., unauthorized access, missing data, server errors.


## Features

### Quiz Creation:
 Users can generate quizzes by providing questions, multiple-choice options, and the correct answer.
### User Authentication: 
The application leverages JWT-based authentication for user sign-in and sign-up, ensuring secure access.
### Quiz Management:
 Users can access active quizzes, view specific quiz results, and retrieve a list of all available quizzes.
### Comprehensive Documentation:
 The API endpoints are thoroughly documented using Swagger UI, enhancing accessibility and understanding.

## Installation

### 1. Clone the repository: 
> git clone https://github.com/Akash-Verma-2000/quiz-application.git

### 2. Install Dependencies:
> npm install

### 3. Set Environment Variables:

> DB_URL=your_mongodb_connection_string

> JWT_SECRET=your_jwt_secret_key

Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret_key with your desired secret key.

### 4. Start the server:

> npm start

## Folder Structure

- **`configurations/`**

    - **`mongoose.config.js:`** Configurations file for the Mongoose ODM.

- **`features/`**

    - **`quiz/`**

        - **`controller/`**

            - **`quiz.controller.js:`** Contains all the quiz controller functions.

        - **`repository/`**

            - **`quiz.crepository.js:`** Contains all the data base related functons.

        - **`route/`**

            - **`quiz.route.js:`** Contains all the route configurations of the quizzes.

        - **`schema/`**

            - **`quiz.schema.js:`** Contains schema for the quiz's object.

    - **`user/`**

        - **`controller/`**

            - **`user.controller.js:`** Contains all the user controller functions.

        - **`repository/`**

            - **`user.crepository.js:`** Contains all the data base related functons.

        - **`route/`**

            - **`user.route.js:`** Contains all the route configurations of the users.

        - **`schema/`**

            - **`user.schema.js:`** Contains schema for the user's object.

- **`middlewares/`**
    - **`jwt.middleware.js:`** JWT configurations file.

- **`.gitignore:`** Information of the file which should be ignored during git commit.

- **`index.js:`** The entry point of the project.

- **`package-lock.json:`** Contains the information of the dependencies versions.

- **`package.json:`** Contains meta informations of the project.

- **`README.md:`** Contains complete details of the project.

- **`swagger.json:`** API documentations.

## API Endpoints

- **`Quizzes`**

    - **`POST /quizzes:`** Create a new quiz.

    - **`GET /quizzes/active:`** Retrieve active quizzes.

    - **`GET /quizzes/:id/result:`** Get results of a specific quiz by ID.

    - **`GET /quizzes/all:`** Get all quizzes.

- **`User`**

    - **`POST /user/signin:`** User sign-in.

    - **`POST /user/signup:`** User sign-up.

## Dependencies
- **express:** Web framework for Node.js.

- **jsonwebtoken:** JSON Web Token implementation.

- **mongoose:** MongoDB object modeling for Node.js.

- **swagger-ui-express:** Middleware for serving Swagger.

## Author

Akash Verma

## Contact me 

 [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-verma-09aug2000/)  [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/Akash_Verma2000/)  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akash.verma217112@gmail.com) 
 [![Naukari](https://img.shields.io/badge/Naukri.com-0A66C2?style=for-the-badge&logo=Naukri.com&logoColor=white)](https://www.naukri.com/mnjuser/profile)
  
## License

This project is licensed under the ISC License.
