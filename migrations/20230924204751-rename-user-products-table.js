
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('UserProducts', 'Orders');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('Orders', 'UserProducts');
  }
};