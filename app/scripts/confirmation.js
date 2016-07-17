import $ from 'jquery';
import Backbone from 'backbone';
import order from './order';
import renderEntireOrder from './renderEntireOrder';





function confirmationOrder() {
    let confirmOrder = $(`
      <div class="confirmContainer">
        <h2> Confirmation </h2>
        <ul class="end-order">
        </ul>
        <p> Tax $ ${order.get('tax').toFixed(2)}</p>
        <p>  Total $ ${order.get('price')}</p>
        <button>close </button>
      </div>
      `);
    console.log(order);
    order.get('items').forEach(function(orderItem) {
        var $li = $(`<li>
<h3>${orderItem.item}  $${orderItem.price} </h3>
<p></p>
</li>`);

        confirmOrder.find('.end-order').append($li);
    });

    confirmOrder.find('button').on('click', function() {
        $('.confirmationContainer').css('display', 'none');

    });




    return confirmOrder;
}


// });






export default confirmationOrder;



// $entireOrder.find('.order-now').on('click', function() {
//     router.navigate('confirm', {
//         trigger: true
//     });


// $entireOrder.find('.order-now').on('click', function(){
//   order.addItem(confirmationOrder);
// });

// confirmOrder.get('items').forEach(function(order) {
//   order.addItem(confirmOrder);
// });

//$entireOrder.find('.order-list').append($li);

// let $confirmation = confirmationOrder();
//     order.addItem($confirmation);
