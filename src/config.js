var env = process.env.NODE_ENV || 'developement';
var config = require('./config.json');
var envConfig = config[env];


object.keys(envConfig).forEach(key => process.env[key] = envConfig[env]);