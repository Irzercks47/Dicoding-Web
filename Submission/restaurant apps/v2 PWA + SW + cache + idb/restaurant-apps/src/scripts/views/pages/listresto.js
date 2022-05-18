import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const ListResto = {
    async render() {
        return `
        <section class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('images/heros/hero-image_2.jpg');">
            <div class="body">
                <h1 class="title">Restaurant Apps</h1>
                <p class="text">Find the best restaurants only on the best websites.</p>
            </div>
        </section>

            <div class="latest">
                <h1 class="content-title">Affiliated Restaurant</h1>
                <div class="restaurantlist" id="restaurantlist"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.listRestaurant();
        const restaurantContainer = document.querySelector('#restaurantlist');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
        // something really
    },
};

export default ListResto;

