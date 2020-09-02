const express = require("express");

const usersRouter = express.Router();

const User = require("../../models/User");

usersRouter.post('/', async (req, res) => {

    try {
        console.log(req.body);
        const newUser = await User.create({ ...req.body });
        res.json({ user: newUser }); // Returns the new user that is created in the database

    } catch (error) {

        console.error(error)
        res.status(404).json({});
    }

});

usersRouter.get('/:userId', async (req, res) => {

    const userId = req.params.userId;

    try {

        const user = await User.findAll({
            where: {
                id: userId,
            }
        })

        res.json({ user });

    } catch (error) {

        console.error(error);

    }

});

module.exports = usersRouter;