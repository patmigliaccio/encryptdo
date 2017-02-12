import Hasher from '../src/Hasher';

const file = 'data/randomStrings.txt';

let slash = new Hasher('sha256');

slash.readFile(file)
    .then((response) => {
        console.log(response);
    });

let output = slash.readString('xyz');
console.log(output);