const assert = require('assert');

Feature('Liking Restaurants');

const linkNamaResto = '#restaurantlist .list_item .list_item_content .list_item_title a';

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    // I.seeElement('.query'); // membuat test menjadi gagal
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
    I.amOnPage('/');
    I.wait(1);

    I.seeElement(linkNamaResto);
    const firstRestaurant = await locate(linkNamaResto).first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.wait(1);

    I.click(firstRestaurant);
    I.wait(1);
    I.seeElement('#likeButton');

    I.click('#likeButton');
    I.wait(1);
    I.amOnPage('/#/favorite');
    I.seeElement('#restaurantlist .list_item');
    const likedrestaurantTitle = await I.grabTextFrom(linkNamaResto);

    assert.strictEqual(firstRestaurantTitle, likedrestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
    I.amOnPage('/');
    I.wait(1);
    I.seeElement(linkNamaResto);

    const restaurants = [];
    for (let i = 1; i <= 3; i++) {
        restaurants.push(await I.grabTextFrom(linkNamaResto));
        I.wait(1);
        I.click(locate(linkNamaResto).at(i));
        I.wait(1);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');
    I.seeElement(linkNamaResto);
    I.wait(1);
    const numberOfLikedResto = await I.grabNumberOfVisibleElements(linkNamaResto);
    assert.strictEqual(numberOfLikedResto, restaurants.length);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.seeElement('.restaurant-item__not__found');
    I.amOnPage('/');
    I.wait(1);
    I.seeElement(linkNamaResto);
    const firstRestaurant = locate(linkNamaResto).first();
    const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.wait(1);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.wait(1);
    I.seeElement(linkNamaResto);
    const unlikedRestaurantsTitles = await I.grabTextFrom(linkNamaResto);
    assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);
    I.seeElement(linkNamaResto);
    I.wait(1);
    I.click(linkNamaResto);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.wait(1);
    I.dontSee('.list_item');
});