const{findGuardiansByMatch}=require('../services/GARDER_MATCH/find');

async function _findGuardiansByMatch(id_match){
    return await findGuardiansByMatch(id_match);
}

module.exports={
    _findGuardiansByMatch
}