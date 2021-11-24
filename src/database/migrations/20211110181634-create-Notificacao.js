'use strict';

const { SequelizeScopeError } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('Notificacao', {
        
        idNotificacao: {
          
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        LoginUsuario: {
          
          type: Sequelize.STRING,
          allowNull: false,
        },     
        Latitude: {
          
          type: Sequelize.DOUBLE,
          allowNull: false,
        },  
        Longitude: {
          
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        DataNotificacao: {
          
          type: Sequelize.DATE,
          allowNull: false,
        },  
        NomeDaDoenca: {
          
          type: Sequelize.STRING,
          allowNull: false,
        },  
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        } ,
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }                                       
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('Notificacao');
     
  }
};
