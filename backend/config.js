const Sequelize = require('sequelize');

let database = 'Welkan';
let username = 'root';
let password = 'arigato';

const config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;