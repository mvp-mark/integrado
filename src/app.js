const express = require('express');
const routes = require('./routes');
const {errors} = require('celebrate');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 *
 * Get: BUSCAR UMA INFORMARÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFROMAÇÃO NO BACK-END
 *
 *
 * Tipos de parâmetros:
 *
 * Query params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Routes params: paramentros utilizados para identificar recursos
 * Request body: corpo da requisição, utilizada para criar ou alterar recursos
 *
 *
 *
 */

 /**
  * 
  * SQL: MySQL, SQLite, PosrgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * 
  * Driver Select * FROM users
  * Querys Builder: table('users').select('*').where()
  */
app.use(routes);

app.use(errors());


module.exports=app;
