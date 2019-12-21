'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Article, {as: 'Articles', foreignKey: 'category_id'})
  };
  return Category;
};