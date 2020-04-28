const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ShelvesController = require('./controllers/ShelvesController');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express();

routes.post('/sessions', SessionController.create);

routes.get('/shelves', ShelvesController.index);
routes.post(
	'/shelves',
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			endereco: Joi.string().required(),
			description: Joi.string()
				.required(),
				// .email(),
			value: Joi.string()
				.required(),
			position: Joi.string().required()
		}),
	}),
	ShelvesController.create
);

routes.get(
	'/profile',
	celebrate({
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required(),
		}).unknown(),
	}),
	ProfileController.index
);

routes.get('/products',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), ProductController.index);


routes.post('/products', ProductController.create);
// routes.delete(
// 	'/incidents/:id',
// 	celebrate({
// 		[Segments.PARAMS]: Joi.object().keys({
// 			id: Joi.number().required(),
// 		}),
// 	}),
// 	ProductController.delete
// );

module.exports = routes;
