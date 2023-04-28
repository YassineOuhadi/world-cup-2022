const{findTop}=require('../services/TOP/get');

async function _findTop(){
    return await findTop();
}

module.exports={
    _findTop
}