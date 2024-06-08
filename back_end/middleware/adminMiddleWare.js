// checks if user admin so I don't have to check in every code lol

function adminMiddleWare(req, res, next){
    if(req.user.role !== 'admin'){
        return res.status(403).json({msg: 'Access denied'});
    }
    next();
}