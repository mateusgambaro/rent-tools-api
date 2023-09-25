'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'userId');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
