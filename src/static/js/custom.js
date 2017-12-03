import $ from 'jquery';

export default function customJs() {
    //Preloader background timeout
    $('.preloaderBackground').delay(1000).fadeOut('slow');

    $('.preloaderWrapper')
        .delay(1000)
        .fadeOut();

    //Initialize wow js

    // Initialize collapse button
    $('.button-collapse').sideNav();

    //Initialize modal
    $('.modal').modal();

    //Initialize tooltip
    $('.tooltipped').tooltip({delay: 50});
}
