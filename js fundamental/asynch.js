//dalam asynch bisa menggunakan setTimeout
console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terimakasih sudah mampir, silakan datang kembali!")
}, 3000)
console.log("Ada yang bisa dibantu?")

const getCake = callback => {
        let cake = null;
        console.log("Sedang membuat kue, silakan tunggu ....")
        setTimeout(() => {
        cake = "Kue Selesai!";
        callback(cake);
    }, 3000)
}

getCake(cake => {
    console.log(cake);
})

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin Kopi tidak bisa digunakan!")
    }
}

const makeCoffee = new Promise(executorFunction);
console.log(makeCoffee);

/* output:
Promise { 'Kopi berhasil dibuat' }
*/