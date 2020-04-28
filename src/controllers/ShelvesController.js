const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');


module.exports = {

    async create (request, response){
        const {endereco, description, value, position} = request.body;
        // console.log(data);
        
    const id = generateUniqueId();
        await connection('shelves').insert({
            id,
            endereco,
            description,
            position,
        })
    
        return response.json({id});
    },

    async index (request, response){
        const shelves = await connection('shelves').select('*');

return response.json(shelves);
    }
}