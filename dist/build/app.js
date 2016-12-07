"use strict";
var hash_1 = require('./hash');
var file = 'data/randomStrings.txt';
var slash = new hash_1.default('sha256');
slash.read(file)
    .then(function (res) {
    console.log(res);
});

//# sourceMappingURL=app.js.map
