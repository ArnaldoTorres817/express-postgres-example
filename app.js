require('dotenv').config();
require("./database");

const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded());

const apiRouter = require("./api/api");

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.use("/api", apiRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));