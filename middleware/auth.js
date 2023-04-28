const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: Missing token' });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      // Clear the invalid or expired token
      res.clearCookie('token');
      return res.status(401).json({ message: 'Authentication failed: Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};

/*
module.exports=(req,res,next)=>{
    passport.authenticate('jwt',{session:false}, function(err,user,info){
        if(err) return res.status(500).json(err);
        if(!user) return res.status(401).json(info);
        req.user=user;
        next(); 
    })(req,res,next);
};
*/