import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import router from './router';
import order from './order';
import renderMenu from './renderMenu';
//import sideMenu from './sideMenu';





var requestSettings = {
    type: 'GET',

    url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    success: function(response) {
        let $menuList = $('.menuContainer');

        _.each(response, function(category, index) {
            let $category = $(`
            <h2 class="category-title">${index}</h2>
            <ul class= "menu-list"></ul>
            `);

            console.log(index);
            category.forEach(function(menuItem) {
                let $menuItem = renderMenu(menuItem);
                $category.filter('.menu-list').append($menuItem);
            });

            $menuList.append($category);
        });
    }
};
$.ajax(requestSettings);
export default requestSettings;



// console.log(response);
// response.forEach(function(category){
//     console.log(category);
// });

//
// response.Beer.forEach(function(item) {
//     var $pubBeerName = $('<h2></h2>');
//     var $pubBeerDescription = $('<h3></h3>');
//     var $pubBeerAbv = $('<div></div>');
//     var $pubBeerPrice = $('<div></div>');
//     var $button = $('<button type="button">Order</button>');
//     var $side = $('.sideMenu');


//     $button.on('click', function(evt) {
//         // evt.preventDefault();
//         order.addItem(item);
//         var orderView = renderOrder(order);
//         $side.append(orderView);
//     });
//
//     var orderView = renderOrder(order);
//     $side.empty().append(orderView);
//
//     $pubBeerName.append(item.item);
//     beer.append($pubBeerName);
//     beer.append($button);
//
//     $pubBeerDescription.append(item.description);
//     beer.append($pubBeerDescription);
//     $pubBeerAbv.append(item.abv);
//     beer.append($pubBeerAbv);
//     $pubBeerPrice.append(item.price);
//     beer.append($pubBeerPrice);
//
// });
//
//
// var foodTitleContainer = $('.entreesTitle');
// var entreesTitle = $('<h1>Entrees</h1>');
// foodTitleContainer.append(entreesTitle);
// response.entrees.forEach(function(item) {
//
//     var food = $('.entreesContent');
//     var entreesName = $('<h2></h2>');
//     var entreesDescription = $('<h3></h3>');
//     var entreesPrice = $('<div></div>');
//     var button = $('<button type="button">Order</button>');
//
//     entreesName.append(item.item);
//     food.append(entreesName);
//     entreesDescription.append(item.description);
//     food.append(entreesDescription);
//     entreesPrice.append(item.price);
//     food.append(entreesPrice);
//     food.append(button);
//
//
//
// });
// var gameContainer = $('.gameTitle');
// var gameTitle = $('<h1>Games</h1>');
// gameContainer.append(gameTitle);
// response.games.forEach(function(item) {
//
//     var games = $('.gameContent');
//     var gameName = $('<h2></h2>');
//     var gamesDescription = $('<h3></h3>');
//     var gamesPrice = $('<div></div>');
//     var button = $('<button type="button">Order</button>');
//
//
//     gameName.append(item.item);
//     games.append(gameName);
//     gamesDescription.append(item.description);
//     games.append(gamesDescription);
//     gamesPrice.append(item.price);
//     games.append(gamesPrice);
//     games.append(button);
//
//
// });
// //make a new order model
// //constructor
//
