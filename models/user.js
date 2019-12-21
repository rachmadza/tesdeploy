'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article, {as: 'Articles', foreignKey: 'author_id'})
  };
  return User;
};