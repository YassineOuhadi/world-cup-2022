const{findAvertissementByMatch}=require('../services/AVERTISSEMENT/find');

async function _findAvertissementByMatch(id_match){
    return await findAvertissementByMatch(id_match);
}

module.exports={
    _findAvertissementByMatch
}