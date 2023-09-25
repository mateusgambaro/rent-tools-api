const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      document: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "Users",
    }
  );

  user.associate = (models) => {
    user.belongsToMany(models.Products, {
      through: models.Orders,
      foreignKey: "userId",
      as: "products",
    });
  };

  return user;
};

module.exports = User;
