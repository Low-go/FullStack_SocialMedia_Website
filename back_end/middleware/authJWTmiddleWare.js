const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    const token = req.header('x-auth-token');
    if (!token){
        return res.status(401).json({message: "No token, authorization denied" });
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
    }
    catch(err){
        return res.status(401).json({message: "Token not valid."});
    }
}

module.exports = authMiddleware;