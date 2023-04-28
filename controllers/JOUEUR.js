const{findPlayerByID,findPlayersBy}=require('../services/JOUEUR/find');

async function _findPlayerByID(id){
    return await findPlayerByID(id);
}


async function _findPlayersBy(str){
    return await findPlayersBy(str);
}

module.exports={
    _findPlayerByID,_findPlayersBy
}