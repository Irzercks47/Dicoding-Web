import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import FavoriteRestaurantSearchView from './liked-resturant/favorite-restaurant-search-view';
import FavoriteresturantSearchPresenter from './liked-resturant/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-resturant/favorite-restaurant-show-presenter.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const view = new FavoriteRestaurantSearchView;

const Like = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb});
        new FavoriteresturantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb});
    },
};

export default Like;

