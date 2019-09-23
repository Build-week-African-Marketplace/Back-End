const knex = require('knex');
const config = require('../knexfile.js');

const secrets = require('../config/secrets')

const environment = secrets.environment|| 'development';

module.exports = knex(config[environment]);