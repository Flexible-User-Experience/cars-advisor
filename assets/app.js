import './styles/theme.scss';
import 'jquery.scrollto';
import { cookieExists, cookieHasValue, setCookie } from 'cookies-utils';

const $ = require('jquery');
require('bootstrap');

$(document).ready(function() {
    let locale = document.getElementById('app-body').dataset.appLocale;
    let googleTagManagerId = document.getElementById('app-body').dataset.appGtm;
    let cookieConsentName = document.getElementById('app-body').dataset.appCookieConsentName;
    let cookiesConsentButtonDeclineAllNode = $('#cookies-consent-button-decline-all');
    let cookiesConsentButtonAcceptAllNode = $('#cookies-consent-button-accept-all');
    let customSwitch2Node = $('#customSwitch2');
    console.log('cookieConsentName', cookieConsentName);
    const cookieConsentOptions = {
        name: cookieConsentName,
        value: 'yes',
        maxAge: 31536000, // 1 year
        // expires: new Date(2099, 10, 1), // optional Date,
        path: '/',
        secure: false,
        sameSite: 'lax' // optional enum 'lax' | 'strict' | 'none'
    };
    cookiesConsentButtonDeclineAllNode.bind('click', 'button', function(event) {
        event.preventDefault();
        console.log('cookies-consent-button-decline-all');
        setCookie(cookieConsentOptions);
        setCookie({
            name: cookieConsentName+'_GTM',
            value: 'no',
            maxAge: 31536000,
            path: '/',
            secure: false,
            sameSite: 'lax'
        });
        $('#staticBackdropModal').modal('hide');
    });
    if (cookieExists(cookieConsentName+'_GTM') && cookieHasValue(cookieConsentName+'_GTM', 'yes')) {
        customSwitch2Node.prop('checked', true);
    }
    if (cookieExists(cookieConsentName+'_GTM') && cookieHasValue(cookieConsentName+'_GTM', 'no')) {
        customSwitch2Node.prop('checked', false);
    }
    customSwitch2Node.bind('click', 'input', function(event) {
        console.log('customSwitch2Node.bind', customSwitch2Node.prop('checked'));
        if (customSwitch2Node.prop('checked')) {
            cookiesConsentButtonDeclineAllNode.prop('disabled', true);
            cookiesConsentButtonAcceptAllNode.prop('disabled', false);
        } else {
            cookiesConsentButtonDeclineAllNode.prop('disabled', false);
            cookiesConsentButtonAcceptAllNode.prop('disabled', true);
        }
    });
    cookiesConsentButtonAcceptAllNode.bind('click', 'button', function(event) {
        event.preventDefault();
        console.log('cookies-consent-button-accept-all');
        setCookie(cookieConsentOptions);
        setCookie({
            name: cookieConsentName+'_GTM',
            value: 'yes',
            maxAge: 31536000,
            path: '/',
            secure: false,
            sameSite: 'lax'
        });
        $('#staticBackdropModal').modal('hide');
    });
    if (locale && googleTagManagerId) {
        if (!cookieExists(cookieConsentName)) {
            $('#staticBackdropModal').modal('show');
        }

        // let _gdpr = _gdpr || [];
        // _gdpr.push([
        //     {
        //         name: 'Google Tag',
        //         type: 'stats',
        //         description: 'Service pour statistiques des visites'
        //     },
        //     [
        //         function(helpers) {
        //             console.log('Helpers!', helpers);
                    // // use helpers
                    // helpers.createScript('https://www.googletagmanager.com/gtag/js?id=' + keys_api.gtag);
                    //
                    // window.dataLayer = window.dataLayer || [];
                    // function gtag() {
                    //     dataLayer.push(arguments)
                    // }
                    // gtag('js', new Date());
                    // gtag('config', '########');
        //         }
        //     ]
        // ]);
        // initGdprCookie(locale);
        // window._gdpr_showModal();
    }
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
