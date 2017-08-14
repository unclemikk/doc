const fs = require("fs");
const path = require('path');


data = '';
process.stdin.setEncoding('utf-8');
 
process.stdin.on('readable', function() {
    var chunk;
    while (chunk = process.stdin.read()) {
      data += chunk;
    }
});
 
process.stdin.on('end', function () {
//    createC3(JSON.parse(data));
});

