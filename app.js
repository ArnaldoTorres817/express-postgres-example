require('dotenv').config();
require("./database");

const port = process.env.PORT || 3000;
const express = require('express');


const app = express();



app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));