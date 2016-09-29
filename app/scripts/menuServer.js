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

            // console.log(index);
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
