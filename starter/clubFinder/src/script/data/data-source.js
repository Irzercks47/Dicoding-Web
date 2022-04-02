class DataSource{
    static searchClub(keyword) {
        return new Promise((res, reject) => {

            const filteredClubs = clubs.filter((club) => {
                return club.name.toUpperCase().includes(keyword.toUpperCase());
            });
        
            if (filteredClubs.length) {
                res(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        })
    };
}

export default DataSource
import clubs from './clubs.js';