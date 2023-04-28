const{findGardienByID}=require('../services/GARDIEN/find');

async function _findGardienByID(id){
    return await findGardienByID(id);
}

module.exports={
    _findGardienByID
}