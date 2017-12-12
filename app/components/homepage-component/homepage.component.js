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

        var $up1 = $('.up1');
        var $down1 = $('.down1');
        var $up2 = $('.up2');
        var $down2 = $('.down2');

        var $win = $(window);

        $("#mensajeContacto").hide();

        $(document).ready(function () {
            $('.parallax').parallax();
            $('.modal').modal();
            $(".button-collapse").sideNav();
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
            $('.aniview').AniView();            
            var options = {
                animateThreshold: 100,
                scrollPollInterval: 20
            }
            $('.aniview').AniView(options);
        });

        $win.on('scroll', function () {
            var trigger = $win.scrollTop();
            var top = $win.scrollTop() / 3;
            $up1.css('transform', 'translateY(' + top * .5 + 'px)');
            $down1.css('transform', 'translateY(' + top * -.5 + 'px)');
            $up2.css('transform', 'translateY(' + top * .5 + 'px)');
            $down2.css('transform', 'translateY(' + top * -.5 + 'px)');
        });

        $('#enviar').click(function () {
            $("#formulario").hide();
            $("#mensajeContacto").show();
            $('#mensajeContacto').addClass("visible animated fadeIn");
        });
    }
})();