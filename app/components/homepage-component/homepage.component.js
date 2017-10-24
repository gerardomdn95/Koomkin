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
        
        var $phone = $('.phone');
        var $up = $('.up');
        var $down = $('.down');

        var $win = $(window);

        $win.on('scroll', function(){
            var top = $win.scrollTop() / 3;
            $up.css('transform', 'translateY(' + top * 5 +'px)');
            $down.css('transform', 'translateY(' + top * -5 +'px)');
            $phone.css('transform', 'translateY(' + top * 5 +'px)'); //'rotate(' + top + 'deg)');
        });

        $(document).ready(function () {
            $('ul.tabs').tabs();
        });

    }

})();