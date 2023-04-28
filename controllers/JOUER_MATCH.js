const{findPlayersByMatch}=require('../services/JOUER_MATCH/find');

async function _findPlayersByMatch(id_match){
    return await findPlayersByMatch(id_match);
}

module.exports={
    _findPlayersByMatch
}