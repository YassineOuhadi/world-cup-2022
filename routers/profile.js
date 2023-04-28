const express=require('express'),
router=express.Router(),
auth = require('../middleware/auth');

router.get('/',auth,async(req,res)=>{
  try {
    session=req.session;
    return res.render('profile', {session:session});
  } catch (e) {
      return res.status(500).json(e.message);
  }
});

/*
router.get('/', auth, async (req, res) => {
    const token = req.cookies.jwt; // extract token from cookie
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decoded._id);
      return res.render('profile', { user });
    } catch (e) {
      return res.status(401).redirect('/signin');
    }
  });
*/

module.exports=router;