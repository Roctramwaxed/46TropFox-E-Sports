'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const games = [
      {
        name: 'dota',
        max_players: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'PUBG',
        max_players: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Mobile Legends',
        max_players: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'FIFA',
        max_players: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
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
