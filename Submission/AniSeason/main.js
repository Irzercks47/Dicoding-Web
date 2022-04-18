import './component/seachBar.js'

const baseUrl = "https://api.jikan.moe/v4/seasons"
const main = () => {
    const search = document.querySelector("search-bar");
    const cardCon = document.querySelector(".container-card")
    
    fetch(`${baseUrl}/upcoming`)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            if(data.status) {
                renderError(data.message);
            } else {
                console.log(data.data);
            }
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
                            <p>${anime.synopsis}</p>
                        </div>
                    </div>
                    <div class="card_footer">
                        <a href="${anime.studios.url}" target="_blank">${anime.studios.name}</a>
                    </div>
                </div>
            ` 
        })
    }



    search.clickEvent = onButtonSearchClicked;
}

export default main;