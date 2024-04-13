jQuery(document).ready(function ($) {





    $('.js-select').niceSelect();
    $(document).on('click', '.menu-btn', function () {
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('is-show');
    });

    const mediaHeader = window.matchMedia('(max-width: 959px)');

    function handleHeader(e) {
        if (e.matches) {
            $('.menu-btn').removeClass('is-active');
            $('.sidebar').removeClass('is-show');
            $(document).on('click', '.menu-btn', function () {
                $('body').toggleClass('no-scroll');
            });
        } else {
            $('.menu-btn').addClass('is-active');
            $('.sidebar').addClass('is-show');
            $('body').removeClass('no-scroll');
        }
    }





    $(".sidebar-hider .icon-arrow-left").click(function () {
        $(".sidebar").removeClass("is-show");
        $(".sidebar").addClass("is-hide");
        $(document).on('click', '.menu-btn', function () {
            $('body').toggleClass('no-scroll');
        });
    });


    $(".sidebar-hider .icon-arrow-right").click(function () {
        $(".sidebar").removeClass("is-hide");
        $(".sidebar").addClass("is-show");
    });



    /////////////////////////////////////////////////////////////////
    // Preloader
    /////////////////////////////////////////////////////////////////

    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(250).fadeOut('slow');



    mediaHeader.addListener(handleHeader);
    handleHeader(mediaHeader);
    const recommendSlider = new Swiper('.js-recommend .swiper', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.js-recommend .swiper-button-next',
            prevEl: '.js-recommend .swiper-button-prev'
        },
        pagination: {
            el: '.js-recommend .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        }
    });
    const trendingSlider = new Swiper('.js-trending .swiper', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.js-trending .swiper-button-next',
            prevEl: '.js-trending .swiper-button-prev'
        },
        pagination: {
            el: '.js-trending .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        }
    });



    const popularStore = new Swiper('.js-store .swiper', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.js-store .swiper-button-next',
            prevEl: '.js-store .swiper-button-prev'
        },
        pagination: {
            el: '.js-store .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 25
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 25
            },
            1599: {
                slidesPerView: 5,
                spaceBetween: 25
            }
        }
    });






    const popularSlider = new Swiper('.js-popular .swiper', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.js-popular .swiper-button-next',
            prevEl: '.js-popular .swiper-button-prev'
        },
        pagination: {
            el: '.js-popular .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 25
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 25
            }
        }
    });



    const popularSlider2 = new Swiper('.js-popular2 .swiper', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.js-popular2 .swiper-button-next',
            prevEl: '.js-popular2 .swiper-button-prev'
        },
        pagination: {
            el: '.js-popular2 .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 25
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            1599: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        }
    });




    const gallerySmall = new Swiper('.js-gallery-small .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        pagination: {
            el: '.js-gallery-small .swiper-pagination',
            type: 'bullets',
            // 'bullets', 'fraction', 'progressbar'
            clickable: true
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
    const galleryBig = new Swiper('.js-gallery-big .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        watchOverflow: true,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        speed: 800,
        thumbs: {
            swiper: gallerySmall
        }
    });
});
