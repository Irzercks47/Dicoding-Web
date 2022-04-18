import axios from "axios"

class DataSource{
    static searchSeason(year, season) {
        return axios.get(`https://api.jikan.moe/v4/seasons/${year}/${season}`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            if(data.teams){
                return Promise.resolve(data.data)
            }else{
                return Promise.reject(`{keyword} is not found`)
            }
        })
    }
}

export default DataSource