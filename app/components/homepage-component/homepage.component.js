(function () {
    'use strict'

    var home = {
        templateUrl: "app/components/homepage-component/homepage.component.html",
        controller: homeCtrl,
        controllerAs: 'vm'
    }

    angular
        .module('koomkin')
        .component('home', home);

    function homeCtrl() {
        var vm = this;

        $('.aniview').AniView();

        var $cintaUp = $('.cintaUp');
        var $cintaDown = $('.cintaDown');
        var $logo = $('#logo');
        var $up = $('.up');
        var $down = $('.down');

        var $win = $(window);

        $win.on('scroll', function(){
            var top = $win.scrollTop() / 3;

            $up.css('transform', 'translateX(' + top * .3 +'px)');
            $down.css('transform', 'translateX(' + top * -.3 +'px)');
            $phone.css('transform', 'translateY(' + top * 5 +'px)'); //'rotate(' + top + 'deg)');
        });

        $(document).ready(function () {
            $('ul.tabs').tabs();
        });

    }

})();