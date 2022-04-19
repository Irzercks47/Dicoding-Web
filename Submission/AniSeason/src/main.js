import axios from 'axios'
import './component/seachBar.js'

const baseUrl = "https://api.jikan.moe/v4/seasons"
const main = () => {
    const search = document.querySelector("search-bar");
    const cardCon = document.querySelector(".container-card")
    
    axios.get(`${baseUrl}/upcoming`)
        .then(data => {
            console.log(data)
            console.log(data.data)
            console.log(data.data.data)
            renderAnime(data.data.data);
        })
        .catch(error => {
            renderError(error);
        })

    const onButtonSearchClicked = () =>{
        const year = search.year
        const season = search.season
        console.log(year)
        console.log(season)
        fetch(`${baseUrl}/${year}/${season}`)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                if(data.status) {
                    renderError(data.message);
                } else {
                    console.log(data.data);
                    renderAnime(data.data);
                }
            })
            .catch(error => {
                renderError(error);
            })
    }

    const renderError = (message) => {
        cardCon.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `
        cardCon.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    const renderAnime = (animes) => {
        cardCon.innerHTML = ``

        animes.forEach(anime =>{

            let footer = anime.studios.map((studio) => {
                console.log(studio)
                return `<a href="${studio.url}" target="_blank">${studio.name}</a>`   
            }).join(`\n`)
            
            if(footer == "") footer = `<p class="nothing">Studio TBA</p>`
            
            let synopsis = `<p>${anime.synopsis}</p>`
            if(anime.synopsis == null) synopsis =`<p class="nothing">No synopsis has been added to this title.</p>`

            // <a href="${e.url}" target="_blank">${e.name}</a>
            // <a href="${e.url}" target="_blank">${e.name}</a>

            cardCon.innerHTML += `
                <div class="card">
                    <div class="header">
                        <img src="${anime.images.webp.image_url}" alt="${anime.title_english}" class="card_img" width="400">
                    </div>
                    <div class="card_body">
                        <div class="tagged">
                            <span class="tag">comedy</span>
                        </div>
                        <div class="card_title">
                            <a href="${anime.url}" target="_blank">${anime.title}</a>
                        </div>
                        <div class="synopsis">
                            <p>${synopsis}</p>
                        </div>
                    </div>
                    <div class="card_footer">
                        ${footer}
                    </div>
                </div>
            ` 
        })
    }



    search.clickEvent = onButtonSearchClicked;
}

export default main;