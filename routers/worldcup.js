const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findAllWorldCups}= require('../controllers/COUPE_MONDE'),
{_findWorldCupByID}= require('../controllers/COUPE_MONDE'),
{_findAllOrganisateurs}= require('../controllers/ORGANISER'),
{_findAllParticipations}= require('../controllers/PARTICIPER');

router.get('/',async(req,res)=>{
    try {
        var WORLDCUP;
        if(req.query.wc){
            WORLDCUP= await _findWorldCupByID(req.query.wc);
        }else{
        WORLDCUP= await _findLastWorldCup();
        }
        const WORLDCUPS = await _findAllWorldCups();
        const ORGANISATEURS = await _findAllOrganisateurs();
        const PARTICIPATIONS = await _findAllParticipations(WORLDCUP.ID);
        return res.render('worldcup', {WORLDCUPS:WORLDCUPS,WORLDCUP:WORLDCUP,ORGANISATEURS:ORGANISATEURS,PARTICIPATIONS:PARTICIPATIONS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


