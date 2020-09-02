const Sequelize = require('sequelize');

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_PORT,
    DB_NAME,
} = process.env;

const db = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT || 5432}/${DB_NAME}`);

db.authenticate()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => {
        console.error(err);
    })

module.exports = db;

const User = require("./models/User");
User.sync();