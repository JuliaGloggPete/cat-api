const{sendResponse} = require('./responses/index')
const {postCat} = require('./functions/postCat')

var cats =[{
   
      
        "name": "Whiskers",
        "age": 2,
        "idnumber": "CAT123456",
        "breed": "Siamese",
        "color": "Seal Point"
      },
      {
        "name": "Mittens",
        "age": 4,
        "idnumber": "CAT789012",
        "breed": "Maine Coon",
        "color": "Tabby"
      },
      {
        "name": "Luna",
        "age": 1,
        "idnumber": "CAT654321",
        "breed": "Persian",
        "color": "White"
      }
    ];
  


exports.handler = async (event, context) => {

    const {method, path} = event.requestContext.http;


    if (method === 'GET' && path === '/cat'){
        return sendResponse(200, {cats})
    }
    else if (method === 'POST' && path === '/cat'){

        const body = JSON.parse(event.body);
        return postCat(cats, body);
       

}
    else if (method === 'GET' && path.startsWith('/cat/')){

        const catId = path.split('/cat/')[1];
       const cat = cats.find(cat => cat.idnumber == catId)

       if (cat) {
        return sendResponse(200,cat)
       } else {
        return sendResponse(404, {message: 'not found'})
       }

       

}
 //00:52
return sendResponse(400, {message: "Wrong data"});

}