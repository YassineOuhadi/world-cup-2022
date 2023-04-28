const{findParticipationGardiens}=require('../services/GARDIEN_PARTICIPER_CM/find');

async function _findParticipationGardiens(id_coupe_monde,id_pays){
    return await findParticipationGardiens(id_coupe_monde,id_pays);
}

module.exports={
    _findParticipationGardiens
}