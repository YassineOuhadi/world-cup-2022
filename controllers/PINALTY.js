const{findPinaltyByMatch}=require('../services/PINALTY/find');

async function _findPinaltyByMatch(id_match){
    return await findPinaltyByMatch(id_match);
}

module.exports={
    _findPinaltyByMatch
}