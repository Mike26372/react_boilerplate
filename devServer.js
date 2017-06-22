var path = require('path');
var express = require('express');
var cors = require('cors');
var compression = require('compression');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var axios = require('axios');
var morgan = require('morgan');

var app = express();
app.use(cors());
app.use(compression());
app.use(morgan('dev'));

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(express.static(path.join(__dirname, 'client', 'styles')));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
