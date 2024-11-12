const jwt = require('jsonwebtoken');
const jwtAuthMiddleware = (req, res, next) => {

    //First check request header has authorization or not
    const authorization = req.headers.authorization;
    if(!authorization) return res.status(401).json({error: "Token not found"});

// Extract jwt token from the request header
const token = req.headers.authorization.split(' ')[1];
if(!token) return res.status(401).json({ error: 'Unauthorized'});

try {
    //verify the Jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach user informtion to the request object
    req.userPayload = decoded;
    next(); 
} catch (error) {
    console.error(err);
    res.status(401).json({error: 'Invalid token'});

}
}
//Function to genrate JWT token
const genrateToken = (userData) => {
//Generate new token using userData
return jwt.sign(userData, process.env.JWT_SECRET , {expiresIn : 300000});
}

module.exports = {jwtAuthMiddleware, genrateToken};