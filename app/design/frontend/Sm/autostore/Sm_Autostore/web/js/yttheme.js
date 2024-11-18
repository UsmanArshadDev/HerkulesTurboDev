define(["jquery", "owlcarousel", "slick","jqueryfancyboxpack"], function ($) {
    $(document).ready(function () {
        // Megamenu
        $('.sm_megamenu_menu > li > div').parent().addClass('parent-item');
        /**
         * Click show filter on mobile
         */

        $("body").on('click', '#btn-filter, .filter-overlay, #close-filter', function () {
            $('html').toggleClass('show-filter-sidebar');
        });
		// counter
        $('.counter-number .count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
		 // gallery
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none'
         });
        /**
         * Hover item menu init lazyload image
         */

        $(".sm_megamenu_menu > li").hover(function () {
            $(document).trigger("afterAjaxLazyLoad");
        });
        // Box full width
        var full_width = $('body').innerWidth();
        $('.full-content').css({'width': full_width});

        $(window).resize(function () {
            var full_width = $('body').innerWidth();
            $('.full-content').css({'width': full_width});
        });

        // Fix hover on IOS
        $('body').bind('touchstart', function () {
        });

        // Go to top
        $('#yt-totop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $("#yt-totop-fix").hide();
        $(function () {
            var wh = $(window).height();
            var whtml = $(document).height();
            $(window).scroll(function () {
                if ($(this).scrollTop() > whtml / 10) {
                    $('#yt-totop-fix').fadeIn();
                } else {
                    $('#yt-totop-fix').fadeOut();
                }
            });
            $('#yt-totop-fix').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });


        /**
         * Client Slider Slick
         */

        $('.client-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: '.client-image'
        });
        $('.client-info').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: '.client-image'
        });

        $('.client-image').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.client-main, .client-info',
            dots: false,
            arrows: true,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            prevArrow: '<div class="slick-prev" aria-label="Previous"><span>Previous</span></div>',
            nextArrow: '<div class="slick-next" aria-label="Next"><span>Next</span></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });

        /**
         * Home page 1
         */

        $(".home-page-1 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-1 .deal-block .owl-carousel").owlCarousel({
            items: 1,
            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 30
        });

        $(".home-page-1 .slider-product-1 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 30,

        });

        $(".home-page-1 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        $(".home-page-1 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        /**
         * Home page 2
         */

        $(".home-page-2 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-2 .deal-block .owl-carousel").owlCarousel({
            items: 1,
            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 30
        });

        $(".home-page-2 .slider-product-list .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-2 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        /**
         * Home page 3
         */

        $(".home-page-3 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-3 .slider-categories .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 15,
            margin: 30,

        });

        $(".home-page-3 .deal-grid-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-3 .list-slider-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-3 .list-slider-2 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-3 .slider-product-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 30,

        });

        $(".home-page-3 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-3 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        /**
         * Home page 4
         */

        $(".home-page-4 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-4 .slider-categories .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 15,
            margin: 30,

        });

        $(".home-page-4 .list-slider-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-4 .list-slider-2 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-4 .list-slider-3 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-4 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        $(".home-page-4 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        /**
         * Home page 5
         */

        $(".home-page-5 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-5 .slider-product-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 30,

        });

        $(".home-page-5 .slider-categories .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1440: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-5 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                },

                1440: {
                    items: 7
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        $(".home-page-5 .deal-block .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 15,
            margin: 30,

        });

        $(".home-page-5 .slider-post .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        /**
         * Home page 6
         */

        $(".home-page-6 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-6 .deal-block .owl-carousel").owlCarousel({
            items: 1,
            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 30
        });

        $(".home-page-6 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-6 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        /**
         * Home page 7
         */

        $(".home-page-7 .slider-product-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 30,

        });

        $(".home-page-7 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-7 .brand-content .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });

        $(".home-page-7 .deal-grid-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-7 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        /**
         * Home page 8
         */

        $(".home-page-8 .slidershow-art-search .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });

        $(".home-page-8 .list-slider-1 .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1700: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,
        });

        $(".home-page-8 .block-post .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1700: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });

        $(".home-page-8 .client-sidebar .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,
        });

        $(".home-page-8 .slider-product-grid .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });

        $(".home-page-8 .slider-categories .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 0,
            margin: 20,

        });

        $(".home-page-8 .block-brand .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 7
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 20,

        });

        $(".home-page-8 .block-deal .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        /**
         * Home page 9
         */

        $(".home-page-9 .slidershow .owl-carousel").owlCarousel({
           items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            margin: 1
        });
        $(".home-page-9 .deal-block .owl-carousel").owlCarousel({
            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        $(".home-page-9 .slider-product-1 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-9 .slider-product-2 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-9 .slider-product-3 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-9 .slider-product-4 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-9 .brand-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 1,

        });
        $(".home-page-9 .slider-post .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: true,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });
	 /**
         * Home page 10
         */

        $(".home-page-10 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });
		$(".home-page-10 .brand-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 10,

        });
		$(".home-page-10 .deal-block .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,
			stagePadding: 10,

        });
		$(".home-page-10 .block-ourteam .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,
			stagePadding: 10,

        });
		$(".home-page-10 .block-clients .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });
		$(".home-page-10 .block-gallery .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3,
					stagePadding: 280
                }
            },

            autoplay: false,
            loop: true,
            nav: false,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,
			

        });
        /**
         * Home page 11
         */

        $(".home-page-11 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });
        $(".home-page-11 .slider-product-list .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 30,

        });
        $(".home-page-11 .deal-grid-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 10,

        });
         /**
         * Home page 12
         */

        $(".home-page-12 .slidershow .owl-carousel").owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            autoplay: true,
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            margin: 1
        });
        $(".home-page-12 .slider-categories .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 7
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 0,
            margin: 20,

        });
         $(".home-page-12 .slider-product-1 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-12 .slider-product-2 .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-12 .block-gallery .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4,
                }
            },

            autoplay: false,
            loop: true,
            nav: false,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            margin: 0,


        });
        $(".home-page-12 .brand-slider .owl-carousel").owlCarousel({

            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 10,

        });
        $(".home-page-12 .block-deal .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 10,
            margin: 20,

        });
        $(".home-page-12 .block-customer .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 4
                }
            },

            autoplay: false,
            loop: false,
            nav: true,
            dots: false,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding:0,
            margin: 85,

        });
         $(".home-page-12 .block-clients-full .owl-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            },

            autoplay: false,
            loop: false,
            nav: false,
            dots: true,
            autoplaySpeed: 500,
            navSpeed: 500,
            dotsSpeed: 500,
            autoplayHoverPause: true,
            stagePadding: 0,
            margin: 30,

        });

    });
	
});

