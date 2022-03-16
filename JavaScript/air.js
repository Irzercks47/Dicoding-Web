const newElement = document.createElement("li");
const elementAwal = document.createElement("li");
const daftar = document.getElementById("daftar");
const itemAwal = document.getElementById("awal");

elementAwal.innerText = "Hidupkan kompor.";
newElement.innerText = "Selamat menikmati!";
//kegunaan append child untuk menambah element di paling bawah
daftar.appendChild(newElement);
//insertBefore mampua untuk memasukkan elemen sebelum elemen HTML tertentu selama elemen parent-nya masih bisa diakses
//memiliki 2 param yang dimana param pertama berisi yang akan ditambah dan param 2 berisi element yang ditenttukan
//sehingga dia akan muncul diatas param ke 2
daftar.insertBefore(elementAwal, itemAwal);