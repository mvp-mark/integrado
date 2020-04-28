const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const shelves = await connection('shelves')
        .where('id',id)
        .select('name')
        .first();


        if(!shelves){

            return response.status(400).json({ error: 'No shelves Found with this id'});
        }

        return response.json(shelves);

    }
}
