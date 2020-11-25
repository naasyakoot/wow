var data = function data() {

    return {

        name : 'SALAM',
        color : 'white',
        cf: 'container-fluid',
        tw: 'display-1 text-white',
        so: 'sometext',
        ba: 'imgs/home-eight-banner-bg.jpg',
        im: 'img-fluid'

    };
};

Vue.createApp({data}).mount('#topmenu');


(function ($) {
    'use strict';

    

    // wow active code
    new WOW().init();

   

    // PreventDefault a click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    

    

})(jQuery);