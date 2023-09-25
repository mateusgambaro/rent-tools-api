const Orders = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "Orders",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
  orders.associate = (models) => {
    orders.belongsTo(models.Products, {
      foreignKey: "productId",
      as: "products",
    });

    orders.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };


  return orders;
};

module.exports = Orders;
