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
      TeamGame.belongsTo(models.Game, {foreignKey: 'GameId'})
      TeamGame.belongsTo(models.Team, {foreignKey: 'TeamId'})
    }
  };
  TeamGame.init({
    TeamId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Teams',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    GameId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'TeamGame',
  });
  return TeamGame;
};