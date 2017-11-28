import { WOW } from 'wowjs/dist/wow';

export default function customJs() {
    //Preloader background timeout
    $('.preloaderBackground').delay(1000).fadeOut('slow');

    $('.preloaderWrapper')
        .delay(1000)
        .fadeOut();

    //Initialize wow js
    let wow = new WOW({
        scrollContainer: '#pageContent' // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Initialize collapse button
    $(".button-collapse").sideNav();

    //Initialize modal
    $('.modal').modal();

    //Initialize tooltip
    $('.tooltipped').tooltip({delay: 50});
}
