const{findAssistesByMatch}=require('../services/ASSISTE/find');

async function _findAssistesByMatch(id_match){
    return await findAssistesByMatch(id_match);
}

module.exports={
    _findAssistesByMatch
}