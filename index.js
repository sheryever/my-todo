var app = require('app');
var BrowerWindow = require('browser-window');

app.on('ready', function(){

  var browerWindow = new BrowerWindow({
    width: 800,
    height: 600
  });

  browerWindow.setMenu(null);

  browerWindow.loadUrl('file://'+ __dirname + "/app/index.html")
});
