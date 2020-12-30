import './styles/theme.scss';
import 'tiny-slider/dist/tiny-slider.css';
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
        items: 2,
        gutter: 5,
        slideBy: 'page',
        controlsText: [
            '<i class="cxi-angle-left"></i>',
            '<i class="cxi-angle-right"></i>'
        ],
        loop: false,
        autoplay: false
    });
});
