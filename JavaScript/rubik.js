const gambar = document.getElementById('gambar')
let playButt = document.querySelectorAll('button')[3]
let links = document.getElementById("links")
let dicoding = document.getElementById("dicodingLink")
let google = document.getElementById('googleLink')
let buttons = document.getElementsByClassName('button')

gambar.setAttribute('width', '400')
gambar.setAttribute('height', '215')

playButt.setAttribute("disabled","disabled")
console.log(buttons) 

dicoding.innerText = 'Belajar Programming di Dicoding'
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";
google.innerHTML = "<i>Mencari sesuatu di google</i>";

Array.from(buttons).forEach( function(button) {
    button.style.borderRadius = "4px"
});

for(let button of buttons){
    button.childNodes[0].style.borderRadius = "4px"
}