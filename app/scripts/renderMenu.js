import $ from 'jquery';
import Backbone from 'backbone';
import requestSetting from './menuServer';
import order from './order';
import renderEntireOrder from './renderEntireOrder';
//import requestSettings from './menuServer';

function renderMenu(menu) {
    let $menuItem = $(`
      <li class="Menu-Item">
        <h3> ${menu.item}</h3>
        <p class="menu-price">${menu.price}</p>

        <p class="menu-descpription"> ${menu.description}</p>
        <button class = "add-to-order"> Order </button>
      </li>
      `);

      $menuItem.find('.add-to-order').on('click', function(){
        order.addItem(menu);
      });


      order.on('items',function(){
          let $entireOrder = renderEntireOrder();
          $('.sideMenu').empty().append($entireOrder);
      });

    return $menuItem;
}
export default renderMenu;






// let $menuItem = $(`
//   <div class="sideContainer">
//     <h2> Final Order </h2>
//     <ul>
//     </ul>
//     <button>order now </button>
//   </div>
//   `);


// menu.get('items').forEach(function(item) {
//     var items = order.item = item.item;
//     var orderPrice = items + menu.price;
//     $menuItem.find('ul').append(`<li>${menu.item} ${item.price}</li>`);
//
// });

// var item = menu.entree= item;
// var price = menu.price;
// var entreePrice = menu.item + menu.price;
// $menuItem.append(`${menu.item} ${menu.entreePrice} `);
//




// var finalButton = $('<button type="button"></button>');
// finalButton.on('click', function() {
//     console.log('hi');
//   $menuItem.append('.confirmationContainer');
// });




//   menu.get('items').forEach(function(item,entree) {
//     var entreeName = menu.entree = item.item;
//     var entreePrice = entreeName + order.price;
//     finalOrder.find('ul').append(`<li>${order.item} ${entree.price}</li>`);




//
// order.get('entrees').forEach(function(entree) {
//     var entreeName = order.item = item.item;
//     var entreePrice = items + order.price;
// finalOrder.find('ul').append(`<li>${order.item} ${entree.item}</li>`);
// });


// var orderButton = $('<button type="order">Now</button>');
// orderButton.on('click', function() {
//
// $('.sideOrder').append(orderButton);
// // requestSettings.fetch({success: function() {
// //   let requestSettings = renderPost(requestSettings);
// });

//
//
// <li><button type="order">Place Order</button></li>
