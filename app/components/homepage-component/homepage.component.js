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

        var $up = $('.up');
        var $down = $('.down');
        var $sec2 = $('#sec2');

        var $win = $(window);

        $win.on('scroll', function () {
            var top = $win.scrollTop() / 3;
            $up.css('transform', 'translateX(' + top * .3 + 'px)');
            $down.css('transform', 'translateX(' + top * -.3 + 'px)');
            //'rotate(' + top + 'deg)');
        });

        var options = [
            {
                selector: '.sec2', offset: 500, callback: function (el) {
                    Materialize.fadeInImage($(el));
                }
            }
        ];
        Materialize.scrollFire(options);

        $(document).ready(function () {
            $('ul.tabs').tabs();
        });

    }

})();