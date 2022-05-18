import CONFIG from '../../globals/config';
const createRestaurantTemplate = (restaurant) => `
        <div class="list_item">
        <img class="list_item_thumb" src="${ CONFIG.BASE_IMAGE_URL + restaurant.pictureId }" alt="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating">
                Rating :
                <p class="list_item_rating_value">${restaurant.rating}</p>
            </p>
            <h1 class="list_item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            <div class="list_item_desc">${restaurant.description.slice(0, 120)}...</div>
        </div>
    </div>
`;

const createRestoDetailTemplate = (restaurant) =>`
    <h2 class="restaurant__name" tabindex="0"  aria-label="${restaurant.restaurant.name} restaurant">${restaurant.restaurant.name}</h2>
    <img class="restaurant__poster" src="${ CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId }" alt="${restaurant.restaurant.name}"/>
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Nama Restaurant: </h4>
        <p>${restaurant.restaurant.name}</p>
        <h4>Alamat: </h4>
        <p tabindex="0"  aria-label=" alamat ${restaurant.restaurant.address}">${restaurant.restaurant.address}</p>
        <h4>Kota: </h4>
        <p tabindex="0"  aria-label=" kota ${restaurant.restaurant.city}">${restaurant.restaurant.city} City</p>
        <h4>Rating: </h4>
        <p tabindex="0"  aria-label=" rating ${restaurant.restaurant.rating} ">${restaurant.restaurant.rating}</p>
        <div class="restaurant__overview">
            <h4>Deskripsi: </h4>
            <p tabindex="0" >${restaurant.restaurant.description}</p>
        </div>
        <div class="menu">
            <div class="makanan">            
                <h4>Menu Makanan: </h4>
                ${restaurant.restaurant.menus.foods.map((food) => `
                    <li class=" detail-restaurant__listMenu-item">
                        ${food.name}
                    </li>
                `).join('')}
            </div>        
            <div class="minuman">            
                <h4>Menu Minuman: </h4>
                ${restaurant.restaurant.menus.drinks.map((drink) => `
                        <li class="detail-restaurant__listMenu-item">
                            ${drink.name}
                        </li>
                `).join('')}
            </div>
        </div>
        <h4 class="reviews">Reviews: </h4>
        <div class="detail_review">        
            ${restaurant.restaurant.customerReviews.map((review) => `
                    <div class="restaurant__review">
                        <h4>${review.name}</h4>
                        <span>${review.date}</span>
                        <p>${review.review}</p>
                    </div>`).join('')}
            </div>
        </div>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
        <button aria-label="unlike this movie" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
`;

export {
    createRestaurantTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createRestoDetailTemplate,
};

