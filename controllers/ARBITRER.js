const{findArbitre}=require('../services/ARBITRER/find');

async function _findArbitre(){
    return await findArbitre();
}

module.exports={
    _findArbitre
}