const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findAllWorldCups}= require('../controllers/COUPE_MONDE'),
{_findWorldCupByID}= require('../controllers/COUPE_MONDE'),
{_findAllOrganisateurs}= require('../controllers/ORGANISER'),
{_findAll} = require('../controllers/OPPOSE'),
{_findGroupByID} = require('../controllers/POOL'),
{_findMatchsByPhase} = require('../controllers/MATCH'),
{_findFirstPhase}= require('../controllers/PHASE'),
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

        const PHASE = await _findFirstPhase(WORLDCUP.ID);

        const GROUP = await _findGroupByID(req.query.id);
        const MATCHS = await _findMatchsByPhase(PHASE.ID);
        const OPPOSES = await _findAll();

        return res.render('matchs', {WORLDCUPS:WORLDCUPS,WORLDCUP:WORLDCUP,ORGANISATEURS:ORGANISATEURS,GROUP:GROUP,MATCHS:MATCHS,OPPOSES:OPPOSES,PARTICIPATIONS:PARTICIPATIONS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


