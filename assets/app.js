import './styles/theme.scss';
import 'jquery.scrollto';
import { cookieExists, cookieHasValue, setCookie } from 'cookies-utils';

const $ = require('jquery');
require('bootstrap');

$(document).ready(function() {
    // Cookies management & behaviour
    let appBody = document.getElementById('app-body');
    let googleTagManagerId = appBody.dataset.appGtm;
    let cookieConsent = appBody.dataset.appCookieConsent;
    let cookieConsentGtm = appBody.dataset.appCookieConsentGtm;
    let cookiesConsentButtonDeclineAllNode = $('#cookies-consent-button-decline-all');
    let cookiesConsentButtonAcceptAllNode = $('#cookies-consent-button-accept-all');
    let customSwitch2Node = $('#customSwitch2');
    $('#cookie-modal2-opener-button').bind('click', 'button', function(event) {
        $('#cookieStaticBackdropModal1').modal('hide');
        $('#cookieStaticBackdropModal2').modal('show');
    });
    $('#cookie-modal1-opener-button').bind('click', 'button', function(event) {
        $('#cookieStaticBackdropModal1').modal('show');
        $('#cookieStaticBackdropModal2').modal('hide');
    });
    const cookieConsentOptions = {
        name: cookieConsent,
        value: 'yes',
        maxAge: 31536000, // 1 year
        path: '/',
        secure: false,
        sameSite: 'lax' // optional enum 'lax' | 'strict' | 'none'
    };
    cookiesConsentButtonDeclineAllNode.bind('click', 'button', function(event) {
        event.preventDefault();
        setCookie(cookieConsentOptions);
        setCookie({
            name: cookieConsentGtm,
            value: 'no',
            maxAge: 31536000,
            path: '/',
            secure: false,
            sameSite: 'lax'
        });
        $('#cookieStaticBackdropModal1').modal('hide');
    });
    cookiesConsentButtonAcceptAllNode.bind('click', 'button', function(event) {
        event.preventDefault();
        setCookie(cookieConsentOptions);
        setCookie({
            name: cookieConsentGtm,
            value: 'yes',
            maxAge: 31536000,
            path: '/',
            secure: false,
            sameSite: 'lax'
        });
        $('#cookieStaticBackdropModal1').modal('hide');
    });
    if (cookieExists(cookieConsentGtm) && cookieHasValue(cookieConsentGtm, 'yes')) {
        customSwitch2Node.prop('checked', true);
    }
    if (cookieExists(cookieConsentGtm) && cookieHasValue(cookieConsentGtm, 'no')) {
        customSwitch2Node.prop('checked', false);
    }
    customSwitch2Node.bind('click', 'input', function() {
        if (customSwitch2Node.prop('checked')) {
            cookiesConsentButtonDeclineAllNode.prop('disabled', true);
            cookiesConsentButtonAcceptAllNode.prop('disabled', false);
        } else {
            cookiesConsentButtonDeclineAllNode.prop('disabled', false);
            cookiesConsentButtonAcceptAllNode.prop('disabled', true);
        }
    });

    if (googleTagManagerId) {
        if (!cookieExists(cookieConsent)) {
            $('#cookieStaticBackdropModal1').modal('show');
        }
        // TODO add Cookies policy doc inside same panel
        // TODO add GTM script
                    // helpers.createScript('https://www.googletagmanager.com/gtag/js?id=' + keys_api.gtag);
                    //
                    // window.dataLayer = window.dataLayer || [];
                    // function gtag() {
                    //     dataLayer.push(arguments)
                    // }
                    // gtag('js', new Date());
                    // gtag('config', '########');
    }
    // Bootstrap init & scroll on click behaviour in some UI elements
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
});
