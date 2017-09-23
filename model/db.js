const mongoose = require('mongoose');
const config = require('../config').database;

mongoose.Promise = global.Promise

const db = mongoose.createConnection(`${config.host}:${config.port}/${config.db}`,{user:config.user,pass:config.pwd});

db.once('open',()=>{
    console.log('we are connected to the database');
});


module.exports = db;