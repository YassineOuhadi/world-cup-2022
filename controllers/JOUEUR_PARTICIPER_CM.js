const{findParticipationJoueurs}=require('../services/JOUEUR_PARTICIPER_CM/find');

async function _findParticipationJoueurs(id_coupe_monde,id_pays){
    return await findParticipationJoueurs(id_coupe_monde,id_pays);
}

module.exports={
    _findParticipationJoueurs
}