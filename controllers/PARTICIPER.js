const{findParticipation,findAllParticipations}=require('../services/PARTICIPER/find');

async function _findParticipation(id_pays,id_coupe_monde){
    return await findParticipation(id_pays,id_coupe_monde);
}

async function _findAllParticipations(id_coupe_monde){
    return await findAllParticipations(id_coupe_monde);
}

module.exports={
    _findParticipation,_findAllParticipations
}