import { createRestaurantTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <div class="latest">
                <h1 class="content-title">Liked Restaurant</h1>
                <input id="query" type="text" aria-label="search box" placeholder="Search">
                <div class="restaurantlist" id="restaurantlist"></div>
            </div>
        `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
            console.log(callback);
        });
    }


    showRestaurants(restaurants) {
        console.log(restaurants);
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantTemplate(restaurant)), '');
        }
        else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurantlist').innerHTML = html;

        document.getElementById('restaurantlist').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;
