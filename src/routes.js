const express = require('express');
const NotificacaoController = require('./controllers/NotificacaoController')
const routes = express.Router();

routes.post('/Notificacao', NotificacaoController.store)
routes.get('/Notificacao', NotificacaoController.index)
routes.get('/Notificacao/RetornoDatas', NotificacaoController.retornoDatas)
routes.get('/Notificacao/RetornoDatasLocalidadeEspecificada', NotificacaoController.retornoDatasLocalidadeEspecifica)
module.exports = routes;