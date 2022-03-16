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
})
