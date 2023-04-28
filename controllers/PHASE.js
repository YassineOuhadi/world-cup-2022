
const{findFirstPhase}=require('../services/PHASE/find');

async function _findFirstPhase(id){
    return await findFirstPhase(id);
}

module.exports={
    _findFirstPhase
}