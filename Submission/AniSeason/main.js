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



    search.clickEvent = onButtonSearchClicked;
}

export default main;