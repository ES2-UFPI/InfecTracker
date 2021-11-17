const { Model, DataTypes } = require('sequelize');

class Notificacao extends Model{
    static init(sequelize){
        super.init({
            LoginUsuario = DataTypes.STRING,
            Latitude = DataTypes.DOUBLE,
            Longitude = DataTypes.DOUBLE,
            DataNotificacao = DataTypes.DATE,
            NomeDoenca = DataTypes.STRING,

        }, {

            sequelize
        })
    }

}

module.exports = Notificacao;