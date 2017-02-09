import * as fs from 'fs';
import * as crypto from 'crypto';

export default class Hash {
    private _hash : any;

    constructor(public algorithm : string, public encoding? : string){
        this._hash = crypto.createHash(algorithm);
        this._hash.setEncoding(encoding || 'hex');
    }

    read(filePath : string) : Promise<any>{
        let reader = fs.createReadStream(filePath);
        reader.pipe(this._hash);

        const promise = new Promise((resolve, reject) => {
            reader.on('end', () => {
                this._hash.end();
                resolve(this._hash.read());
            });
        });

        return promise;
    }
}
