'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Articles', [{
      title: 'Fundamental React',
      content: 'text content',
      image: 'image',
      category_id: 1,
      category_name: '',
      is_published: 1,
      is_archived: 0,
      slug: 'fundamental-react',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fundamental React Native',
      content: 'text content',
      image: 'image',
      category_id: 1,
      category_name: '',
      is_published: 1,
      is_archived: 0,
      slug: 'fundamental-react-native',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Javascript',
      content: 'text content',
      image: 'image',
      category_id: 1,
      category_name: '',
      is_published: 1,
      is_archived: 0,
      slug: 'javascript',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Articles', null, {});
  }
};
