'use strict';
const clotesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    color: {
        type: DataTypes.STRING,
        required: true
    },
    size: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = clotesModel;