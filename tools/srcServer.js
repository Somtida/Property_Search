import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import api from './api/index'
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// import mongoose from 'mongoose';
//
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/property-manager');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/api', require('./backend/routes/api'))
app.use('/api', api)

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${port}`);
    console.log(`Listening at http://localhost:${port}`);
  }
});
