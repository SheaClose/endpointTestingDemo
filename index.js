var express = require('express'),
app = express();

app.listen(3000, function(){
  console.log('App is now listening @ 3000');
});
module.exports = app;
