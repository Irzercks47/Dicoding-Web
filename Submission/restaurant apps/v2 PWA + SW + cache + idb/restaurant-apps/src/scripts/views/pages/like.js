import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
            <div class="latest">
                <h1 class="content-title">Liked Restaurant</h1>
                <div class="restaurantlist" id="restaurantlist"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector('#restaurantlist');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
        // something really
    },
};

export default Like;

