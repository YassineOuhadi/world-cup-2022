const{findCountryByID,findCountriesBy}=require('../services/PAYS/find');

async function _findCountryByID(id){
    return await findCountryByID(id);
}

async function _findCountriesBy(str){
    return await findCountriesBy(str);
}


module.exports={
    _findCountryByID,_findCountriesBy
}