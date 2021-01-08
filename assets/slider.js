import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider'

const $ = require('jquery');

$(document).ready(function() {
    tns({
        container: '.cs-carousel-inner',
        mode: 'carousel',
        items: 3,
        gutter: 5,
        speed: 1000,
        autoplayTimeout: 3000,
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
