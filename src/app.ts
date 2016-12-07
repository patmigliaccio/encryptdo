import Hash from './hash';

const file = 'data/randomStrings.txt';

let slash = new Hash('sha256');

slash.read(file)
    .then((res) => {
        console.log(res);
    });