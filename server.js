const express= require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8090, function(){
  console.log('server is running on 8090 port');
});