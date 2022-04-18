import './component/seachBar.js'
import DataSource from './data/data-source.js';

const main = () => {
    const search = document.querySelector("search-bar");
    const cardCon = document.querySelector(".container-card")
    

    const onButtonSearchClicked = () =>{
        const year = search.year
        const season = search.season
        const result = DataSource.searchSeason(search.year,search.season)
        console.log(year)
        console.log(season)
        console.group(result)
    }

    search.clickEvent = onButtonSearchClicked;
}

export default main;