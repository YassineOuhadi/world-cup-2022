const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findParticipationJoueurs}= require('../controllers/JOUEUR_PARTICIPER_CM'),
{_findPlayerByID} = require('../controllers/JOUEUR');

router.get('/',async(req,res)=>{
    try {
        var WORLDCUP;
        if(req.query.wc){

        }else{
        WORLDCUP= await _findLastWorldCup();
        }
        const JOUEUR = await _findPlayerByID(req.query.id);
        const PARTICIPATION_PLAYERS = await _findParticipationJoueurs(WORLDCUP.ID,JOUEUR.ID_PAYS);
        return res.render('player', {WORLDCUP:WORLDCUP,JOUEUR:JOUEUR,PARTICIPATION_PLAYERS:PARTICIPATION_PLAYERS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


