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
        
        $(document).ready(function () {
            $('.parallax').parallax();
            $('.modal').modal();
            $(".button-collapse").sideNav();
            $('a[href^="#"]').on('click',function (e) {
                e.preventDefault();
        
                var target = this.hash,
                $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });
            $('#second').mouseover(function () {
                $('#negocios').addClass("visible animated fadeInRight");
            });
            $('#third').mouseover(function () {
                $('#thirdLeft').addClass("visible animated fadeInLeft");
                $('#thirdRight').addClass("visible animated fadeInRight");
            });
            $('#fourth').mouseover(function () {
                $('#fourthLeft').addClass("visible animated fadeInLeft");
                $('#app1').addClass("visible animated fadeInDown");
                $('#app2').addClass("visible animated fadeInDown");
                $('#app3').addClass("visible animated fadeInDown");
            });
            $('#social-div').mouseover(function () {
                $('.socialElements').addClass("visible animated zoomIn");
            });
            $('#team').mouseover(function () {
                $('.teamElements').addClass("visible animated fadeInRight");
            });
            $('#team').mouseover(function () {
                $('.teamElements').addClass("visible animated zoomIn");
            });
            $('#datos').mouseover(function () {
                $('.datosElements').addClass("visible animated zoomIn");
                (function ($) {
                    $.fn.countTo = function (options) {
                        options = options || {};

                        return $(this).each(function () {
                            // set options for current element
                            var settings = $.extend({}, $.fn.countTo.defaults, {
                                from: $(this).data('from'),
                                to: $(this).data('to'),
                                speed: $(this).data('speed'),
                                refreshInterval: $(this).data('refresh-interval'),
                                decimals: $(this).data('decimals')
                            }, options);

                            // how many times to update the value, and how much to increment the value on each update
                            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                                increment = (settings.to - settings.from) / loops;

                            // references & variables that will change with each update
                            var self = this,
                                $self = $(this),
                                loopCount = 0,
                                value = settings.from,
                                data = $self.data('countTo') || {};

                            $self.data('countTo', data);

                            // if an existing interval can be found, clear it first
                            if (data.interval) {
                                clearInterval(data.interval);
                            }
                            data.interval = setInterval(updateTimer, settings.refreshInterval);

                            // initialize the element with the starting value
                            render(value);

                            function updateTimer() {
                                value += increment;
                                loopCount++;

                                render(value);

                                if (typeof (settings.onUpdate) == 'function') {
                                    settings.onUpdate.call(self, value);
                                }

                                if (loopCount >= loops) {
                                    // remove the interval
                                    $self.removeData('countTo');
                                    clearInterval(data.interval);
                                    value = settings.to;

                                    if (typeof (settings.onComplete) == 'function') {
                                        settings.onComplete.call(self, value);
                                    }
                                }
                            }

                            function render(value) {
                                var formattedValue = settings.formatter.call(self, value, settings);
                                $self.html(formattedValue);
                            }
                        });
                    };

                    $.fn.countTo.defaults = {
                        from: 0,               // the number the element should start at
                        to: 0,                 // the number the element should end at
                        speed: 1000,           // how long it should take to count between the target numbers
                        refreshInterval: 100,  // how often the element should be updated
                        decimals: 0,           // the number of decimal places to show
                        formatter: formatter,  // handler for formatting the value before rendering
                        onUpdate: null,        // callback method for every time the element is updated
                        onComplete: null       // callback method for when the element finishes updating
                    };

                    function formatter(value, settings) {
                        return value.toFixed(settings.decimals);
                    }
                }(jQuery));

                jQuery(function ($) {
                    // custom formatting example
                    $('.count-number').data('countToOptions', {
                        formatter: function (value, options) {
                            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                        }
                    });

                    // start all the timers
                    $('.timer').each(count);

                    function count(options) {
                        var $this = $(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    }
                });
            });
        });

        $win.on('scroll', function () {
            var top = $win.scrollTop() / 3;
            $up1.css('transform', 'translateY(' + top * .5 + 'px)');
            $down1.css('transform', 'translateY(' + top * -.5 + 'px)');
            $up2.css('transform', 'translateY(' + top * .5 + 'px)');
            $down2.css('transform', 'translateY(' + top * -.5 + 'px)');
        });
    }

})();