const{findAllOrganisateurs}=require('../services/ORGANISER/find');

async function _findAllOrganisateurs(){
    return await findAllOrganisateurs();
}

module.exports={
    _findAllOrganisateurs
}