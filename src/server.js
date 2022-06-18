'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

let port = process.env.PORT;
const notFoundHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const router = require('./router/routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
// app.get('/',);

app.use(logger);

// Routes
app.use(router);

app.use(internalErrorHandler);
app.use('*', notFoundHandler);

function start(){
app.listen(port,() => {
    console.log(`Server is Listening on PORT ${port}`);
})
}

module.exports = {
    app,
    start,
}