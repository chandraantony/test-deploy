const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const fs = require('fs');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');

const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })
}));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome'
  });
});

app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
