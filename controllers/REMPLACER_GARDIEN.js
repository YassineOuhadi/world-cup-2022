const{findRemplacementGuardians}=require('../services/REMPLACER_GARDIEN/find');

async function _findRemplacementGuardians(id_match){
    return await findRemplacementGuardians(id_match);
}

module.exports={
    _findRemplacementGuardians
}