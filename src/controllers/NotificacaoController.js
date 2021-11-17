const Notificacao = require('../models/Notificacao');
module.exports = {

    async index(req,res) {
        const not = await Notificacao.findAll();

        return res.json(not);
    },

    async store(req,res) {
        const { LoginUsuario,Latitude,Longitude,DataNotificacao,NomeDoenca } = req.body;
        const not = await Notificacao.create({LoginUsuario,Latitude,Longitude,DataNotificacao,NomeDoenca});

        return res.json(not);
    }
};