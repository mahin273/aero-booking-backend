'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: DataTypes.STRING,
    airplaneId: DataTypes.INTEGER,
    departureAirportId: DataTypes.INTEGER,
    arrivalAirportid: DataTypes.INTEGER,
    arrivalTime: DataTypes.DATE,
    departureTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    boardingGate: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};