const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findAllWorldCups}= require('../controllers/COUPE_MONDE'),
{_findWorldCupByID}= require('../controllers/COUPE_MONDE'),
{_findAllOrganisateurs}= require('../controllers/ORGANISER'),
{_findByMatch} = require('../controllers/OPPOSE'),
{_findMatchByID} = require('../controllers/MATCH'),
{_findPlayersByMatch} = require('../controllers/JOUER_MATCH'),
{_findRemplacementPlayers} = require('../controllers/REMPLACER_JOUEUR'),
{_findGuardiansByMatch} = require('../controllers/GARDER_MATCH'),
{_findRemplacementGuardians} = require('../controllers/REMPLACER_GARDIEN'),
{_findPinaltyByMatch} = require('../controllers/PINALTY'),
{_findAvertissementByMatch} = require('../controllers/AVERTISSEMENT'),
{_findGoalsByMatch} = require('../controllers/MARQUER'),
{_findAssistesByMatch} = require('../controllers/ASSISTE');

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
        const MATCH = await _findMatchByID(req.query.id);
        const OPPOSES = await _findByMatch(req.query.id);
        const PLAYERS = await _findPlayersByMatch(req.query.id);
        const REMPLACEMENT_PLAYERS = await _findRemplacementPlayers(req.query.id);
        const GUARDIANS = await _findGuardiansByMatch(req.query.id);
        const REMPLACEMENT_GUARDIANS = await _findRemplacementGuardians(req.query.id);
        const PENALTIES = await _findPinaltyByMatch(req.query.id);
        const AVERTISSEMENTS = await _findAvertissementByMatch(req.query.id);
        const GOALS = await _findGoalsByMatch(req.query.id);
        const ASSISTES = await _findAssistesByMatch(req.query.id);
        return res.render('match', {WORLDCUPS:WORLDCUPS,WORLDCUP:WORLDCUP,ORGANISATEURS:ORGANISATEURS,MATCH:MATCH,OPPOSES:OPPOSES,PLAYERS:PLAYERS,GUARDIANS:GUARDIANS,REMPLACEMENT_PLAYERS:REMPLACEMENT_PLAYERS,REMPLACEMENT_GUARDIANS:REMPLACEMENT_GUARDIANS,PENALTIES:PENALTIES,AVERTISSEMENTS:AVERTISSEMENTS,GOALS:GOALS,ASSISTES:ASSISTES});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


