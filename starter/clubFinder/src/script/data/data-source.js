// import clubs from './clubs.js';
class DataSource{
    // static searchClub(keyword) {
    //     return new Promise((res, reject) => {

    //         const filteredClubs = clubs.filter((club) => {
    //             return club.name.toUpperCase().includes(keyword.toUpperCase());
    //         });
        
    //         if (filteredClubs.length) {
    //             res(filteredClubs);
    //         } else {
    //             reject(`${keyword} is not found`);
    //         }
    //     })
    // };
    static searchClub(keyword) {
        return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            if(data.teams){
                return Promise.resolve(data.teams)
            }else{
                return Promise.reject(`{keyword} is not found`)
            }
        })
    }
}

export default DataSource