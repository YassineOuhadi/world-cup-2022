const LocalStrategy=require('passport-local').Strategy,
{_findByUsername}=require('../controllers/users'),
bcrypt=require("bcrypt");

module.exports=new LocalStrategy({session:false},async(username,password,done)=>{
    try {
        const user=await _findByUsername(username);
        if(!user) return done(null, false,'Username not correct');
        const match=bcrypt.compareSync(password,user.password);
        if(!match) return done(null, false,'Password not correct');
        return done(null,{
            username:user.username,
            id:user.id,
            created_at:user.created_at,
            updated_at:user.updated_at
        });
    } catch (e) {
        done(e);
    }
})