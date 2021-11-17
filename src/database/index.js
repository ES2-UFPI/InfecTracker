const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Notificacao = require('../models/Notificacao');
const connection = new Sequelize(dbConfig);


Notificacao.init(connection);
module.exports = connection;