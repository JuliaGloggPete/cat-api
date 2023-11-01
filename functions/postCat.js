const{sendResponse} = require('../responses/index')


function checkCatFormat(body){

    const keys = Object.keys(body)


    if(body?.name && body?.age && body?.idnumber && body?.breed && body?.color && keys.length == 5){
        return true

    }
    else
    {return false}
}

function postCat(cats, body){
    if(checkCatFormat(body)){
        cats.push(body)
        return sendResponse(200, {sucess: true} )}
    else {  
        
        return sendResponse(400, {message: "Wrong data"})
    }

}

module.exports={ postCat}