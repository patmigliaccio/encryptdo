"use strict";
var fs = require('fs');
var crypto = require('crypto');
var file = 'data/randomStrings.txt';
var hash = crypto.createHash('sha256');
hash.setEncoding('hex');
var reader = fs.createReadStream(file);
reader.on('end', function () {
    hash.end();
    console.log(hash.read());
});
reader.pipe(hash);

//# sourceMappingURL=main.js.map
