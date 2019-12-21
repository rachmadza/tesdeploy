'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    is_published: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_archived: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    slug: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'Category',
      sourceKey: 'id'
    })
    Article.belongsTo(models.User, {
      foreignKey: 'author_id',
      as: 'Author',
      sourceKey: 'id'
    })
  };
  return Article;
};