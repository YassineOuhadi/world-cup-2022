const{findLastWorldCup,findAllWorldCups,findWorldCupByID,findAllGroups}=require('../services/COUPE_MONDE/find');

async function _findLastWorldCup(){
    return await findLastWorldCup();
}

async function _findWorldCupByID(id){
    return await findWorldCupByID(id);
}

async function _findAllWorldCups(){
    return await findAllWorldCups();
}

async function _findAllGroups(id_coupe_monde){
    return await findAllGroups(id_coupe_monde);
}

module.exports={
    _findLastWorldCup,_findAllWorldCups,_findWorldCupByID,_findAllGroups
}