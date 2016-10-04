
import $ from 'jquery';
import Backbone from 'backbone';
import order from './order';
import renderEntireOrder from './renderEntireOrder';
import router from './router';

function confirmationOrder() {

    let confirmOrder = $(`
      <div class="confirmContainer">
        <h2> Confirmation </h2>
        <ul class="end-order">
        </ul>
        <div class="confirmAmount">
        <p class="confirmTax"> Tax $ ${order.get('tax').toFixed(2)}</p>
        <p class="confirmTotal">   Total $ ${order.get('price')}</p>
        </div>

        <button>close </button>
      </div>
      `);

    order.get('items').forEach(function(orderItem) {
        var $li = $(`<li>
<h3>${orderItem.item}  $${orderItem.price} </h3>
<p></p>
</li>`);

        confirmOrder.find('.end-order').append($li);
    });

    confirmOrder.find('button').on('click', function() {
        $('.confirmationContainer').css('display', 'none');
        router.navigate('menu',{trigger:true});



    });

    return confirmOrder;
}

export default confirmationOrder;
