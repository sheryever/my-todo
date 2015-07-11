var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function(){

  var browerWindow = new BrowserWindow({
    width: 610,
    height: 600
  });

  browerWindow.setMenu(null);

  browerWindow.loadUrl('file://'+ __dirname + "/app/index.html")
});
