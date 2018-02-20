/**
 * Created by stefan on 14.02.18.
 *
 *
 *
 */
(function () {
    'use strict';

    var openBtn = document.querySelector('#navigation__button');
    var closeBtn = document.querySelector('#close__button');
    var overlayNavigation = document.querySelector('.overlay__mobile__navigation');

    function closeMenu() {
        overlayNavigation.classList.remove('overlay__mobile__navigation--visible');
    }

    function openMenu() {
        overlayNavigation.classList.toggle('overlay__mobile__navigation--visible');
    }

    // close menu when the page loads
    window.onload = closeMenu();

    // overlay-navigation close
    closeBtn.addEventListener('click', closeMenu);

    // open overlay-navigation
    openBtn.addEventListener('click', openMenu);

})();
