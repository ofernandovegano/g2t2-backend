'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      federative_unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};