const Notificacao = require('../models/Notificacao');
const { Op } = require('sequelize');
var lat = 85.2349;
var long = 85.2349;
module.exports = {

    async index(req,res) {
        const not = await Notificacao.findAll();
        
        return res.json(not);
    },
    async retornoDatas(req,res) {
       
        var atual = Date.now();
        var dataAtual = new Date(atual- 604800000);//7 dias
        var ano = dataAtual.getFullYear();
        var mes = dataAtual.getMonth()+1;
        var dia = dataAtual.getDate();
        var hora = dataAtual.getHours();
        var minuto = dataAtual.getMinutes();
        var segundo = dataAtual.getSeconds();


        var hoje = new Date(atual);
        var anoHoje = hoje.getFullYear();
        var mesHoje = hoje.getMonth()+1;
        var diaHoje = hoje.getDate();
        var horaHoje = hoje.getHours();
        var minutoHoje = hoje.getMinutes();
        var segundoHoje = hoje.getSeconds();


        
        var dataTeste = (ano + "-"+ mes + "-" + dia +" "+ hora + ":" + minuto + ":" + segundo).toString();
        var dataHoje = (anoHoje + "-"+ mesHoje + "-" + diaHoje +" "+ horaHoje + ":" + minutoHoje + ":" + segundoHoje).toString();
        
        const not = await Notificacao.findAll({
            where : {

                data_notificacao: {
                    [Op.between]: [dataTeste,dataHoje]

                }
            }
        });
        
        return res.json(not);
    },
    async retornoDatasLocalidadeEspecifica(req,res) {
        //Função para efeitos de demonstração

        var atual = Date.now();
        var dataAtual = new Date(atual- 604800000);//7 dias
        var ano = dataAtual.getFullYear();
        var mes = dataAtual.getMonth()+1;
        var dia = dataAtual.getDate();
        var hora = dataAtual.getHours();
        var minuto = dataAtual.getMinutes();
        var segundo = dataAtual.getSeconds();


        var hoje = new Date(atual);
        var anoHoje = hoje.getFullYear();
        var mesHoje = hoje.getMonth()+1;
        var diaHoje = hoje.getDate();
        var horaHoje = hoje.getHours();
        var minutoHoje = hoje.getMinutes();
        var segundoHoje = hoje.getSeconds();


        
        var dataTeste = (ano + "-"+ mes + "-" + dia +" "+ hora + ":" + minuto + ":" + segundo).toString();
        var dataHoje = (anoHoje + "-"+ mesHoje + "-" + diaHoje +" "+ horaHoje + ":" + minutoHoje + ":" + segundoHoje).toString();
        
        const not = await Notificacao.findAll({
            where : {//A latitude e a longitude seriam "pegas" a partir da localização atual do usuário para efeitos de comparação.
                latitude: {
                    [Op.between]: [lat-0.0002,lat+0.0002]
                },
                longitude: {
                    [Op.between]: [long-0.0002,long+0.0002]
                },
                data_notificacao: {
                    [Op.between]: [dataTeste,dataHoje]

                }
            }
        });
        
        return res.json(not);
    },    
    async store(req,res) {
        const { IdNotificacao,LoginUsuario,Latitude,Longitude,DataNotificacao,NomeDoenca } = req.body;
        const not = await Notificacao.create({ IdNotificacao,LoginUsuario,Latitude,Longitude,DataNotificacao,NomeDoenca});

        return res.json(not);
    }
};