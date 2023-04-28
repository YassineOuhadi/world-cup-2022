const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findAllOrganisateurs}= require('../controllers/ORGANISER'),
{_findParticipation}= require('../controllers/PARTICIPER'),
{_findParticipationJoueurs}= require('../controllers/JOUEUR_PARTICIPER_CM'),
{_findParticipationGardiens}= require('../controllers/GARDIEN_PARTICIPER_CM'),
{_findCountryByID} = require('../controllers/PAYS'),
auth = require('../middleware/auth');
router.get('/',async(req,res)=>{
    try {
        var WORLDCUP;
        if(req.query.wc){

        }else{
        WORLDCUP= await _findLastWorldCup();
        }
        const COUNTRY = await _findCountryByID(req.query.id);
        const ORGANISATEURS = await _findAllOrganisateurs(WORLDCUP.ID);
        const PARTICIPATION = await _findParticipation(COUNTRY.ID,WORLDCUP.ID);
        const PARTICIPATION_PLAYERS = await _findParticipationJoueurs(WORLDCUP.ID,COUNTRY.ID);
        const PARTICIPATION_GARDIENS = await _findParticipationGardiens(WORLDCUP.ID,COUNTRY.ID);
        return res.render('country', {WORLDCUP:WORLDCUP,ORGANISATEURS:ORGANISATEURS,COUNTRY:COUNTRY,PARTICIPATION:PARTICIPATION,PARTICIPATION_PLAYERS:PARTICIPATION_PLAYERS,PARTICIPATION_GARDIENS:PARTICIPATION_GARDIENS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


