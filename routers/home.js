const express=require('express'),
router=express.Router(),
{_findTop} = require('../controllers/TOP'),
{_findAll} = require('../controllers/OPPOSE'),
{_findArbitre} = require('../controllers/ARBITRER'),
{_findMatch} = require('../controllers/MATCH');
var moment = require('moment');
router.get('/',async(req,res)=>{

    session=req.session;
  
    try {
        const TOP = await _findTop();
        const OPPOSES = await _findAll();
        const MATCHS = await _findMatch();
        const ARBITRER = await _findArbitre();
        return res.render('index', {TOP:TOP, OPPOSES:OPPOSES, MATCHS:MATCHS,ARBITRER:ARBITRER,moment:moment});
    } catch (e) {
        return res.status(500).json(e.message);
    }
    
});

module.exports=router;


