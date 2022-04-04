// Shadow Host
const divElement = document.createElement("div");


// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten di dalam shadow DOM";


// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
//bila open properti shadowRoot mengembalikan struktur DOM yang berada pada shadow tree.
//bila closed maka shadowRoot akan mengembalikan nilai null. 
const shadowRoot = divElement.attachShadow({mode: "open"});


// Memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

// menetapkan styling pada Shadow DOM
shadowRoot.innerHTML += `
    <style>
    h1 {
        color: green;
    }
    </style>
`;

// Memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);