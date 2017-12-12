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
        });

        $win.on('scroll', function () {
            var trigger = $win.scrollTop();
            var top = $win.scrollTop() / 3;
            $up1.css('transform', 'translateY(' + top * .5 + 'px)');
            $down1.css('transform', 'translateY(' + top * -.5 + 'px)');
            $up2.css('transform', 'translateY(' + top * .5 + 'px)');
            $down2.css('transform', 'translateY(' + top * -.5 + 'px)');

            if (trigger >= 500) {
                $('#negocios').addClass("visible animated fadeInRight");
            }
            if (trigger >= 1500) {
                $('#thirdLeft').addClass("visible animated fadeInLeft");
                $('#algoritmo').addClass("visible animated fadeInRight");
            }
            if (trigger >= 2500) {
                $('#fourthLeft').addClass("visible animated fadeInLeft");
                $('#app1').addClass("visible animated fadeInDown");
                $('#app2').addClass("visible animated fadeInDown");
                $('#app3').addClass("visible animated fadeInDown");
            }
            if (trigger >= 3500) {
                $('#optimiza').addClass("visible animated fadeInLeft");
                $('#likes').addClass("visible animated fadeInRight");
            }
            if (trigger >= 4500) {
                $('.teamElements').addClass("visible animated zoomIn");
            }
            if (trigger >= 5500) {
                $('#datosDiv').addClass("visible animated zoomIn");
                $('#un').addClass("visible animated zoomIn");
                $('#dos').addClass("visible animated zoomIn");
                $('#tres').addClass("visible animated zoomIn");
                $('#cuatro').addClass("visible animated zoomIn");
            }
        });

        $('#enviar').click(function () {
            $("#formulario").hide();
            $("#mensajeContacto").show();
            $('#mensajeContacto').addClass("visible animated fadeIn");
        });
    }
})();