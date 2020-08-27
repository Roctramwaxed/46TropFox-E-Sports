'use strict';

const games = [
  {
    name: 'dota',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'PUBG',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'FIFA',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {



    return queryInterface.bulkInsert('Games', games)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
