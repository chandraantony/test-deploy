const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const timeout = require('connect-timeout');
const compression = require('compression');

require('dotenv').config();

const middlewares = require('./middlewares');

const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(timeout('30s'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome'
  });
});

app.use('/api/v1', api);
app.use(middlewares.haltOnTimedout)
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
