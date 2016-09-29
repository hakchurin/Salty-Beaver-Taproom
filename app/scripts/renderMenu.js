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


      // order.on('items',function(){
      //   console.log('hi');
      //     let $entireOrder = renderEntireOrder();
      //     $('.sideMenu').empty().append($entireOrder);
      // });

    return $menuItem;
}
export default renderMenu;
