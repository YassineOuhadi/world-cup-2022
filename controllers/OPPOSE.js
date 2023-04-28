const{findAll,findByMatch}=require('../services/OPPOSE/find');

async function _findAll(){
    return await findAll();
}
async function _findByMatch(id){
    return await findByMatch(id);
}

module.exports={
    _findAll,_findByMatch
}