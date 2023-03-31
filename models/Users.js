"use strict";

const path = require("path")
const {sequelize} = require("../DB")
const {DataTypes} = require("sequelize")

const Students = sequelize.define("Students", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.CHAR(255),
        allowNull: false,

    },
    first_name: {
        type: DataTypes.CHAR(100),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.CHAR(100),
        allowNull: false,
    },
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    birthday: {
        type: DataTypes.DATE
    },
    country: {
        type: DataTypes.CHAR(100),
        allowNull: true,
        defaultValue: null,

    },
    city: {
        type: DataTypes.CHAR(100),
        allowNull: true,
        defaultValue: null

    },

}, {
    tableName: "users",
    timestamps: false,
});

    module.exports = { Students }