const Sequelize = require("sequelize");

const db = require("../database");

const User = db.define('user', {

    // attributes

    firstName: {

        type: Sequelize.STRING,

        allowNull: false

    },

    lastName: {

        type: Sequelize.STRING

        // allowNull defaults to true

    }

}, {

    // options

});

module.exports = User;