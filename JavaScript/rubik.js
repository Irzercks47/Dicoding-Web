const gambar = document.getElementById('gambar')
let playButt = document.querySelectorAll('button')[3]
let links = document.getElementById("links")

gambar.setAttribute('width', '400')
gambar.setAttribute('height', '215')

playButt.setAttribute("disabled","disabled")
let linkInner = links.innerHTML
let linkText = links.innerText