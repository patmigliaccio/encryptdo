import * as fs from 'fs';
import * as crypto from 'crypto';

export default class Hash {
    private hash : any;

    constructor(public algorithm : string, public encoding? : string){
        this.hash = crypto.createHash(algorithm);
        this.hash.setEncoding(encoding || 'hex');
    }

    read(filePath : string){
        let reader = fs.createReadStream(filePath);
        reader.pipe(this.hash);

        const promise = new Promise((resolve, reject) => {
            reader.on('end', () => {
                this.hash.end();
                resolve(this.hash.read());
            });
        });

        return promise;
    }
}
