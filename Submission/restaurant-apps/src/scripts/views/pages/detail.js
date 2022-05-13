import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
            <div id="restaurants" class="restaurants"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurants');
        restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.restaurant.id,
                name: restaurant.restaurant.name,
                description: restaurant.restaurant.description,
                pictureId: restaurant.restaurant.pictureId,
                city: restaurant.restaurant.city,
                rating: restaurant.restaurant.rating,
            },
        });
    },
};

export default Detail;