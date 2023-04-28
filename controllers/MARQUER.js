const{findGoalsByMatch}=require('../services/MARQUER/find');

async function _findGoalsByMatch(id_match){
    return await findGoalsByMatch(id_match);
}

module.exports={
    _findGoalsByMatch
}