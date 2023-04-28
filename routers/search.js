const express=require('express'),
router=express.Router(),
{_findPlayersBy} = require('../controllers/JOUEUR'),
{_findCountriesBy} = require('../controllers/PAYS');

router.get('/',async(req,res)=>{
    try {
        if(req.query.by){
            
        }else{
            
        };
        const PLAYERS = await _findPlayersBy(req.query.by);
        const COUNTRIES = await _findCountriesBy(req.query.by);

        return res.render('search',{PLAYERS:PLAYERS,COUNTRIES:COUNTRIES});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;
