import * as fs from 'fs';
import * as crypto from 'crypto';

const file = 'data/randomStrings.txt';
const hash = crypto.createHash('sha256');

hash.setEncoding('hex');

const reader = fs.createReadStream(file);

reader.on('end', () => {
    hash.end();
    console.log(hash.read());
});

reader.pipe(hash);