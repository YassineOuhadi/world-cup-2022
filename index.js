require('dotenv').config();
const ip = '192.168.1.105';
const port= process.env.PORT || 9100,
express=require('express'),
expressLayouts = require('express-ejs-layouts'),
flash = require('connect-flash'),
session = require('express-session'),
path = require('path'),
app=express( ),
db = require('./models'),
cors=require('cors'),
bodyParser=require('body-parser'),
passport = require('passport'),
LocalStrategy=require('./passport/local'),
JWTStrategy=require('./passport/jwt'),
cookieParser = require("cookie-parser"),
fs = require("fs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:false,
    cookie: { maxAge: oneDay },
    resave: false 
}));

//view setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

passport.use('local',LocalStrategy);
passport.use('jwt',JWTStrategy);
app.use(passport.initialize());

app.use('/',require('./routers/home'));
app.use('/search',require('./routers/search'));
app.use('/worldcup',require('./routers/worldcup.js'));
app.use('/match',require('./routers/match.js'));
app.use('/country',require('./routers/country.js'));
app.use('/player',require('./routers/player.js'));
app.use('/groups',require('./routers/groups.js'));
app.use('/matchs',require('./routers/matchs.js'));
app.use('/guardian',require('./routers/guardian.js'));
app.use('/auth',require('./routers/auth'));
app.use('/users',require('./routers/users'));
app.use('/profile',require('./routers/profile'));

app.get('/logout', (req, res) => { 
    res.clearCookie('token'); 
    req.session.destroy((err) => {  
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
});
  
app.listen(port, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});

db.sequelize
.sync({force:false})
.then(()=>console.log("Connect"))
.catch((e)=>console.log('Error => ',e));
