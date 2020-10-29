const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// const dotenv = require('dotenv/config');

const app = express();

mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT);