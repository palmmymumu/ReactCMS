import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ContentLists from './components/ContentLists.jsx';

var app = express();

// app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.engine('handlebars', exphbs());
app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../templates'));

var server = app.listen(3000, () => {
  var host = server.address().address,
    port = server.address().port;

  console.log('Server listening at http://' + host + ':' + port + '/');
});

app.get('/', (req, res) => {
  res.render('index.handlebars', {
    markup: ReactDOMServer.renderToString(React.createElement(ContentLists))
  });
});
