const{findMatch,findMatchByID,findMatchsByPhase}=require('../services/MATCH/find');

async function _findMatch(){
    return await findMatch();
}
async function _findMatchByID(id){
    return await findMatchByID(id);
}

async function _findMatchsByPhase(id){
    return await findMatchsByPhase(id);
}

module.exports={
    _findMatch,_findMatchByID,_findMatchsByPhase
}