import $ from 'jquery';
import Backbone from 'backbone';
import requestSettings from './menuServer';
import order from './order';
import renderMenu from './renderMenu';
import confirmationOrder from './confirmation';
import renderEntireOrder from './renderEntireOrder';


const Router = Backbone.Router.extend({
    routes: {
        menu: 'menuFunction',
        posts: 'sideMenuFunction',
        // finalOrder: 'orderFunction',
        renderOrder: 'renderOrderFunction',
        confirm: 'confirmationOrderFunction'

    },
    menuFunction: function() {
        $('.container').append(requestSettings);
    },
    sideMenuFunction: function() {
        menuServer.fetch();
        var menuServer = renderPosts(sideMenu);
        $('.sideMenu').empty().append(Order);
    },
    renderOrderFunction: function() {
        $('side').empty().append(Order);
    },

    confirmationOrderFunction: function() {
        let $confirmationOrder = confirmationOrder(order);
        $('.confirmationContainer').empty().append($confirmationOrder);
    }
});

const router = new Router();
export default router;
