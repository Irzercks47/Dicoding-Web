const incButt = document.getElementById('incrementButton')
const dispNumb = document.getElementById('count')

function welcome(){
    // alert("Sim salabim muncullah elemen-elemen HTML!")
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

document.body.onload = welcome;
incButt.addEventListener('click', () => {
    dispNumb.innerText++;
    if(dispNumb.innerText == 7){
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi..."
        const image = document.createElement("img");
        image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
        const contents = document.querySelector(".contents");
        contents.appendChild(hiddenMessage).appendChild(image);
    }
})
