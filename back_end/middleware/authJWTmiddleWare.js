const jwt = require('jsonwebtoken');


function authMiddleware(req, res, next){
    const token = req.header('x-auth-token');
    if (!token){
        return res.status(401).json({message: "No token, authorization denied" });
    }

    try{
        const decode = jwt.verify(token, "test"); // this must be changed later, this is just for test purposes
        req.user = decode;
        next()
    }
    catch(err){
        return res.status(401).json({message: "Token not valid."});
    }
}

module.exports = authMiddleware;