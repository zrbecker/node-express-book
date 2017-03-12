var fs = require('fs');

const FILE_NAME = __dirname + '/../node_modules/zombie/lib/history.js';

fs.readFile(FILE_NAME, function(err, data) {
  if (err) {
    return console.log(err);
  }

  var dataStr = data.toString();
  var oldStr = 'referrer: this.current && this.current.window.document.referrer';
  var newStr = 'referrer: this.current.url || this.current.window.document.referrer';
  
  var oldStrRegExp = new RegExp(oldStr, 'g');
  var oldMatches = dataStr.match(oldStrRegExp);
  if (oldMatches) {
    var newDataStr = dataStr.replace(new RegExp(oldStr, 'g'), newStr);
    fs.writeFile(FILE_NAME, newDataStr, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated file ' + FILE_NAME);
      }
    });
  } else {
    console.log('No update needed');
  }
});