const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findAllWorldCups}= require('../controllers/COUPE_MONDE'),
{_findWorldCupByID}= require('../controllers/COUPE_MONDE'),
{_findAllOrganisateurs}= require('../controllers/ORGANISER'),
{_findGroups} = require('../controllers/POOL'),
{_findAllParticipations}= require('../controllers/PARTICIPER');;

router.get('/',async(req,res)=>{
    session=req.session;
    try {
        var WORLDCUP;
        if(req.query.wc){
            WORLDCUP= await _findWorldCupByID(req.query.wc);
        }else{
            WORLDCUP= await _findLastWorldCup();
        }
        const WORLDCUPS = await _findAllWorldCups();
        const ORGANISATEURS = await _findAllOrganisateurs();

        const GROUPS = await _findGroups(WORLDCUP.ID);
        const PARTICIPATIONS = await _findAllParticipations(WORLDCUP.ID);
      
        return res.render('groups', {WORLDCUPS:WORLDCUPS,WORLDCUP:WORLDCUP,ORGANISATEURS:ORGANISATEURS,GROUPS,GROUPS,PARTICIPATIONS:PARTICIPATIONS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


