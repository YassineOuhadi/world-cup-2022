const express=require('express'),
router=express.Router(),
{_create,_findByUsername}=require('../controllers/users'), 
passport = require('passport');
jwt= require('jsonwebtoken');

router.post('/signin',async(req,res,next)=>{
    passport.authenticate('local',{session:false},function(err,user,info){
    if(err) return res.status(500).json(err);
    if(!user) return res.status(400).json(info);
    req.session.user = user;  // Store user object in the session
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '24h' });
    res.cookie('token', token, { httpOnly: true, secure: true });
    res.redirect('/profile');
    })(req,res,next);
});

router.post('/signup',async(req,res)=>{
try {
    const foundUser = await _findByUsername(req.body.username);
    if(foundUser){
        return res.status(400).json('User exist');
    }
    //return res.status(200).json(user);
    const user = await _create(req.body);
    return res.status(201).json({
        status:'success',
        message:'User Created'
    });
} catch (e) { 
    return res.status(500).json(e.message);
}
});

module.exports=router;