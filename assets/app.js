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
    $('#first_call_to_action_button').bind('click', 'a', function(event) {
        event.preventDefault();
        $.scrollTo('#contacto', 250, {offset: -90});
    });
    $('#second_call_to_action_button').bind('click', 'a', function(event) {
        event.preventDefault();
        $.scrollTo('#contacto', 250, {offset: -90});
    });
    tns({
        container: '.cs-carousel-inner',
        mode: 'carousel',
        items: 3,
        gutter: 5,
        speed: 1000,
        autoplayTimeout: 3000,
        // autoplayButton: '',
        slideBy: 'page',
        controlsText: [
            '<i class="cxi-angle-left"></i>',
            '<i class="cxi-angle-right"></i>'
        ],
        autoplayButtonOutput: false,
        arrowKeys: true,
        controls: false,
        center: true,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true
    });
});
