const{findGroups,findGroupByID}=require('../services/POOL/find');

async function _findGroups(id){
    return await findGroups(id);
}


async function _findGroupByID(id){
    return await findGroupByID(id);
}

module.exports={
    _findGroups,_findGroupByID
}