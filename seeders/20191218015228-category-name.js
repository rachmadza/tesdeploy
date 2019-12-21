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
   return queryInterface.bulkInsert('Categories', [{
      name: 'Development',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      name: 'Bussiness',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Finance',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Productivity',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Design',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Marketing',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lifestyle',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Photography',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Health',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Music',
      is_published: 1,
      is_archived: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
