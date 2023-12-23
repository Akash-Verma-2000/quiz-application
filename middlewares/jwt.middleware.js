// THIS FILE SERVES AS THE AUTHENTICATION MIDDLEWARE USING JSON WEB TOKENS (JWT)
// IMPORT JSONWEBTOKEN LIBRARY FOR TOKEN OPERATIONS
import jwt from 'jsonwebtoken';
// JWT AUTHENTICATION MIDDLEWARE FUNCTION
const jwtAuthoriser = (req, res, next) => {
    // CHECK IF THE REQUEST HEADER CONTAINS A TOKEN
    const token = req.headers['authorization'];
    if (!token) {
        // IF NO TOKEN PROVIDED, RETURN UNAUTHORIZED ACCESS RESPONSE
        return res.status(401).send({ message: "Unauthorized Access" });
    }
    try {
        // VERIFY THE TOKEN EXTRACTED FROM THE REQUEST HEADER
        const payload = jwt.verify(token, 'C3vYbr2by8');
        req.userID = payload.userID; // SET USER ID IN REQUEST OBJECT
    } catch (err) {
        // IF TOKEN VERIFICATION FAILS, RETURN UNAUTHORIZED ACCESS RESPONSE
        return res.status(401).send({ message: "Unauthorized Access" });
    }
    // CONTINUE TO THE NEXT MIDDLEWARE OR ROUTE HANDLER
    next();
}
// EXPORT THE JWT AUTHENTICATION MIDDLEWARE FUNCTION
export default jwtAuthoriser;

