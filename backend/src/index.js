const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

/** JSON
 *  Query Params: request.query - nomeados enviados na rota após "?" (filtros, paginação)
 *  Route Params: request.params - utilizados para identificar recursos
 *  Resquest Body: body = request.body; Corpo da requisição, utilizado para criar ou alterar recursos
 * **/


    
