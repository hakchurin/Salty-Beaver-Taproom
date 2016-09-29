import $ from 'jquery';
import Backbone from 'backbone';
import router from './router';
import requestSettings from './menuServer';
import renderEntireOrder from './renderEntireOrder';
import _ from 'underscore';




const Order = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/hakchurinmenu',
    defaults: {
        tax: 0,
        price: 0,
        items: []

    }
});

Order.prototype.addItem = function(item) {
    var newItemsList = this.get('items').concat(item);
    this.set('items', newItemsList);
    this.calculate();
    let $entireOrder = renderEntireOrder();
    $('.sideMenu').empty().append($entireOrder);

};

Order.prototype.calculate = function() {
    this.set('price', 0);
    this.set('tax', 0);
    this.get('items').forEach((item) => {
    this.set('price', this.get('price') + item.price);
    });
    this.set('tax', this.get('price') * 0.08);
    this.set('price', this.get('price') + this.get('tax'));
    this.trigger('change');
};




Order.prototype.deleteItem = function(item,i){

  let itemsArr = this.get('items');
   let newItemsArr = _.without(itemsArr, item);
   this.set('items', newItemsArr);
  this.calculate();
};


let order = new Order();
export default order;
