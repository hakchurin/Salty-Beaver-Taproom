import $ from 'jquery';
import order from './order';
import confirmationOrder from './confirmation';
import router from './router';



function renderEntireOrder() {
    var $li;

    let $entireOrder = $(`
    <div class="sideContainer">
      <h2> Final Order </h2>
      <ul class="order-list">
      </ul>
      <div class= "price-tax">
        <p> Tax $${order.get('tax').toFixed(2)}</p>
        <p> Total $${order.get('price')}</p>
        </div>
        <button class="order-now">order now </button>
    </div>
    `);

    order.get('items').forEach(function(orderItem,i) {
      $li = $(`<li class="sideList">
          <button class="delete"> X</button>
      <h2>${orderItem.item} $${orderItem.price}</h2>

    </li>`);
        $entireOrder.find('.order-list').append($li);

        $entireOrder.find('.delete').on('click', function(e) {
        order.deleteItem(orderItem,i)
        $entireOrder.find('li').eq(i).remove();
        renderEntireOrder();
    });
    });




    $entireOrder.find('.order-now').on('click', function() {
        $('.confirmationContainer').css('display', 'block');
        router.navigate('confirm',{trigger:true});
    });
    return $entireOrder;
}
export default renderEntireOrder;






// let $finalEntireOrder = $(`
// <div class="finalContainer">
//   <h2>Final Order</h2>
//   <ul class="final-order-list">
//   </ul>
//   <div class= "final-price-tax">
//     <p>Tax $${order.get('tax').toFixed(2)}</p>
//     <p>Total $${order.get('price')}</p>
//   </div>
//     <button class="confirm-now">order now </button>
// </div>
// `);

  // router.navigate('confirm', {trigger: true});
  // $('.confirmationContainer').css('display', 'block');
  //
  // order.get('items').forEach(function(orderItem) {
  //
  //   let $finalLi = $(`<li>
  //     <h2>${orderItem.item} $${orderItem.price}</h2>
  //   </li>`);
    // order.calculate();
  //
  //   $('.confirmationContainer').append($finalEntireOrder);
  //     $finalEntireOrder.find('.final-price-tax').append($finalLi);
  // });
