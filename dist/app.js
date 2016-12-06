'use strict';

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _crypto = require('crypto');

var crypto = _interopRequireWildcard(_crypto);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var file = 'data/randomStrings.txt';
var hash = crypto.createHash('sha256');

hash.setEncoding('hex');

var reader = fs.createReadStream(file);

reader.on('end', function () {
    hash.end();
    console.log(hash.read());
});

reader.pipe(hash);