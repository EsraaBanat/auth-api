'use strict';
const foodModel = (sequelize, DataTypes) => sequelize.define('Foods', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    calories: {
        type: DataTypes.FLOAT,
        required: true
    },
    type: {
        type: DataTypes.ENUM('fruit', 'vegitable', 'protein'),
        required: true
    }
});

module.exports = foodModel;