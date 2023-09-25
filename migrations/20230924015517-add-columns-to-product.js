'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'volts', {
      allowNull: true,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Products', 'watts', {
      allowNull: true,
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Products', 'usability', {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Products', 'condition', {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Products', 'brand', {
      allowNull: true,
      type: Sequelize.STRING,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'volts');
    await queryInterface.removeColumn('Products', 'watts');
    await queryInterface.removeColumn('Products', 'usability');
    await queryInterface.removeColumn('Products', 'condition');
    await queryInterface.removeColumn('Products', 'brand');
  }
};
