(function () {
    'use strict'

    var home = {
        templateUrl: "app/components/homepage-component/homepage-component.html"
    }

    angular
        .module('koomkin')
        .component('home', home);
})();