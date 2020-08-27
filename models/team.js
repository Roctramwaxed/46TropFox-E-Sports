'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
const teamIconPath = require('../helpers/teamIconPath')

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.TeamGame, {foreignKey: 'TeamId'})
      Team.belongsToMany(models.Game, {through: models.TeamGame, foreignKey: 'TeamId'})
    }
  };
  Team.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: DataTypes.STRING,
    icon: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Rejected: file format is not .jpg'
        }
      }
    },
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  Team.beforeCreate((team, options) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(team.password, salt)
    team.password = hash
    team.icon = teamIconPath(team.name)
  });
  return Team;
};