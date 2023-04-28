const express=require('express'),
router=express.Router(),
{_findLastWorldCup}= require('../controllers/COUPE_MONDE'),
{_findParticipationGardiens}= require('../controllers/GARDIEN_PARTICIPER_CM'),
{_findGardienByID} = require('../controllers/GARDIEN');

router.get('/',async(req,res)=>{
    try {
        var WORLDCUP;
        if(req.query.wc){

        }else{
        WORLDCUP= await _findLastWorldCup();
        }
        const GARDIEN = await _findGardienByID(req.query.id);
        const PARTICIPATION_GARDIENS = await _findParticipationGardiens(WORLDCUP.ID,GARDIEN.ID_PAYS);
        return res.render('guardian', {WORLDCUP:WORLDCUP,GARDIEN:GARDIEN,PARTICIPATION_GARDIENS:PARTICIPATION_GARDIENS});
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
module.exports=router;


