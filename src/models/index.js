'use strict';

require('dotenv').config();

const {Sequelize,DataTypes} = require('sequelize');
const foodModel = require('./food-model');
const clothesModel = require('./clothes-model');
const userModel = require('../auth/models/users-model');
const Collection = require('./data-collection');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequelizeOptions =
    process.env.NODE_ENV === "production" ?
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            },
            native: true
        }
    } : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodTable = foodModel(sequelize, DataTypes);
const clothesTable = clothesModel(sequelize, DataTypes);
const userTable = userModel(sequelize, DataTypes);

const foodCollection = new Collection(foodTable);
const clothesCollection = new Collection(clothesTable);

module.exports = {
    db: sequelize,
    food:foodCollection,
    clothes:clothesCollection,
    users:userTable,
}