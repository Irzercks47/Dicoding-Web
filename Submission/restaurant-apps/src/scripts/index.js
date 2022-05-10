import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click',() =>{
    navLinks.classList.toggle('active');
});

const main = document.querySelector('main');

main.addEventListener('click', () => {
    navLinks.classList.remove('active');
});


import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData);
    let datas = jsonData.restaurants;
    let dataList = '';
    datas.forEach(function(data) {
        dataList +=`
        <div class="list_item">
            <img class="list_item_thumb" src="${data.pictureId}" alt="${data.name}">
            <div class="city">${data.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : 
                    <p class="list_item_rating_value">${data.rating}</p>
                </p>
                <h1 class="list_item_title"><a href="#">${data.name}</a></h1>
                <div class="list_item_desc">${data.description.slice(0, 120)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#restaurantlist').innerHTML = dataList;  
});