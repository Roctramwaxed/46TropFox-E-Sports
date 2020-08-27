'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TeamGame.init({
    slot - number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeamGame',
  });
  return TeamGame;
};