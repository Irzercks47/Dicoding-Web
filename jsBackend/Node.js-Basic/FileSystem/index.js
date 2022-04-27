// asynch
// const fs = require('fs');

// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

//synch
// const fs = require('fs');

// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);

// latihan
const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'utf-8', fileReadCallback)