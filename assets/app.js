import './styles/theme.scss';
import 'jquery.scrollto';
import { tns } from 'tiny-slider/src/tiny-slider'

const $ = require('jquery');
require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
    $('#navbarSupportedContent').bind('click', 'ul li a', function(event) {
        event.preventDefault();
        $.scrollTo(event.target.hash, 250, {offset: -90});
    });
    tns({
        container: '.cs-carousel-inner',
        mode: 'carousel',
        items: 1,
        gutter: 5,
        slideBy: 'page',
        autoHeight: true,
        autoplay: true
    });
});

console.log('Hello Webpack Encore! Edit me in assets/app.js');
