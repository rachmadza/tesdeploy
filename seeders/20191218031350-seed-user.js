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
    return queryInterface.bulkInsert('Users', [{
      fullname: 'Rachmad Zaini Alberto',
      username: 'rachmadza',
      email: 'rachmad@mail.com',
      password: 'password',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      fullname: 'Saldi Yoga Pratama',
      username: 'saldi',
      email: 'saldi@mail.com',
      password: 'password',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
