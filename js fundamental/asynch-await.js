//Keyword async digunakan untuk memberitahu JavaScript untuk menjalankan fungsi makeCoffee() secara asynchronous. Lalu keyword 
//await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.
const getCoffee = () => {
    return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
        if(seeds >= 10) {
        resolve("Coffee didapatkan!");
        } else {
        reject("Biji kopi habis!")
        }
    }, 1000)
    })
}

// jika promise gagal dilakukan (onRejected)? 
//Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.
async function makeCoffee() {
    try {
    const coffee = await getCoffee();
    console.log(coffee);
    } catch(rejectedReason) {
    console.log(rejectedReason);
    }
}

makeCoffee();