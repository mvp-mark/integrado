const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const { page = 1 } = request.query;

		const [count] = await connection('product').count();

		console.log(count)
		const product = await connection('product')
			.join('shelves', 'location', '=', 'product.location')
			.limit(5)
			.offset((page - 1) * 5)
			.select([
				'product.*',
				'shelves.endereco',
				'shelves.description',
				'shelves.position'
			]);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(product);
	},


	async create(request, response) {
		const { name, sku, location, order, quantity } = request.body;
		// request.headers;
		// const location = request.headers.authorization;

		const [id] = await connection('product').insert({
			name,
			sku,
			location,
			order,
			quantity
		});

		return response.json({ id });
	},
	// async delete (request,response){
	// 	const {id} = request.params;
	// 	const ong_id = request.headers.authorization;

	// 	const incident = await connection('product')
	// 	.where('id',id)
	// 	.select('ong_id')
	// 	.first();


	// 	if (incident.ong_id != ong_id){
	// 		return response.status(401).json({error: ' Operation not permitted.'});

	// 	}
	// 	await connection('product').where('id',id).delete();

	// 	return response.status(204).send();
	// },
};
