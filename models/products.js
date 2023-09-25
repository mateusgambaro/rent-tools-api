const Products = (sequelize, DataTypes) => {
    const products = sequelize.define('Products', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
      volts: DataTypes.STRING,
      watts: DataTypes.STRING,
      usability: DataTypes.STRING,
      condition: DataTypes.STRING,
      brand: DataTypes.STRING,
    }, { timestamps: true });
    products.associate = (models) => {
      products.belongsToMany(models.User, { through: models.Orders, foreignKey: 'productId', as: 'users' });
    };
    return products;
  };
  
  module.exports = Products;