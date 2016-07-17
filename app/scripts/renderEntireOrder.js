import $ from 'jquery';
import order from './order';
import confirmationOrder from './confirmation';
import router from './router';

function renderEntireOrder() {
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

    order.get('items').forEach(function(orderItem) {
        var $li = $(`<li>
      <h2>${orderItem.item} $${orderItem.price}</h2>

    </li>`);

        $entireOrder.find('.order-list').append($li);


    });


    $entireOrder.find('.order-now').on('click', function() {
        router.navigate('confirm', {
            trigger: true
        });

        $('.confirmationContainer').css('display', 'block');
        console.log('.order-now');


        order.save();






    });
    return $entireOrder;


}


export default renderEntireOrder;
