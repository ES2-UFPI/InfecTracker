const express = require('express');
const NotificacaoController = require('./controllers/NotificacaoController')
const routes = express.Router();

routes.post('/Notificacao', NotificacaoController.store)
routes.get('/Notificacao', () => {
    
})

module.exports = routes;