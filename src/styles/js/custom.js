import $ from 'jquery';

export function customJs() {
    //Preloader background timeout
    $('.preloaderBackground').delay(1000).fadeOut('slow');

    $('.preloaderWrapper')
        .delay(1000)
        .fadeOut();

    //$('.slider').slider({ indicators: false });

    //Initialize wow js
    const WOW = require('wowjs').WOW;

    let wow = new WOW({
        scrollContainer: '#pageContent' // optional scroll container selector, otherwise use window
    });

    wow.init();

    //Initialize tooltip
    //$('.tooltipped').tooltip({delay: 50});
}
