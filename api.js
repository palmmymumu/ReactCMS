const app = require('express')();

const videos = [{
    id: 1,
    title: 'Test 1',
    desc: 'Desc 1',
    thumbnail: 'https://graph.facebook.com/100008024768026/picture?width=100&height=100'
  },
  {
    id: 2,
    title: 'Test 2',
    desc: 'Desc 2',
    thumbnail: 'https://graph.facebook.com/100008024768026/picture?width=100&height=100'
  }
];

var server = app.listen(3001, () => {
  var host = server.address().address,
    port = server.address().port;

  console.log('Server listening at http://' + host + ':' + port + '/');
});

app.get('/videos', (req, res) => {
  console.log('Sent');
  res.json({
    data: videos
  });
});
