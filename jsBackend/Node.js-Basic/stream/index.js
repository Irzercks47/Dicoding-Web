const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        let text = readableStream.read()
        process.stdout.write(`[${text}]`);
        writableStream.write(`${text}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});
