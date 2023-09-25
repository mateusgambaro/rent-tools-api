'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    await queryInterface.addColumn('Products', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'createdAt');
    await queryInterface.removeColumn('Products', 'updatedAt');
  }
};
