"use strict";
var fs = require('fs');
var crypto = require('crypto');
var Hash = (function () {
    function Hash(algorithm, encoding) {
        this.algorithm = algorithm;
        this.encoding = encoding;
        this.hash = crypto.createHash(algorithm);
        this.hash.setEncoding(encoding || 'hex');
    }
    Hash.prototype.read = function (filePath) {
        var _this = this;
        var reader = fs.createReadStream(filePath);
        reader.pipe(this.hash);
        var promise = new Promise(function (resolve, reject) {
            reader.on('end', function () {
                _this.hash.end();
                resolve(_this.hash.read());
            });
        });
        return promise;
    };
    return Hash;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hash;

//# sourceMappingURL=hash.js.map
