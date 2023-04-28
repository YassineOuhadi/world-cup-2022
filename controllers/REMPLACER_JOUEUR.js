const{findRemplacementPlayers}=require('../services/REMPLACER_JOUEUR/find');

async function _findRemplacementPlayers(id_match){
    return await findRemplacementPlayers(id_match);
}

module.exports={
    _findRemplacementPlayers
}