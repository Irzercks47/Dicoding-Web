import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
    static async listRestaurant() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    /* static async favoriteRestaurant() {
        const response = await fetch(API_ENDPOINT.Favorite);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }*/

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = response.json();
        return responseJson;
    }
}

export default RestaurantDbSource;