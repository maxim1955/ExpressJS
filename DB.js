"use strict";

const {Sequelize, DataTypes,where} = require('sequelize');

const sequelize = new Sequelize('world', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});

module.exports = {sequelize};
