$(function() {

    //Slimmenu
    $('header .menu').slimmenu({
        resizeWidth: '1100', /* Navigation menu will be collapsed when document width is below this size or equal to it. */
        initiallyVisible: false, /* Make main navigation menu initially visible on mobile devices without the need to click on expand/collapse icon. */
        collapserTitle: '', /* Collapsed menu title. */
        animSpeed: 'medium', /* Speed of the sub menu expand and collapse animation. */
        easingEffect: null, /* Easing effect that will be used when expanding and collapsing menu and sub menus. */
        indentChildren: false, /* Indentation option for the responsive collapsed sub menus. If set to true, all sub menus will be indented with the value of the option below. */
        childrenIndenter: '&nbsp;', /* Responsive sub menus will be indented with this character according to their level. */
        expandIcon: '<i>&#9660;</i>', /* An icon to be displayed next to parent menu of collapsed sub menus. */
        collapseIcon: '<i>&#9650;</i>' /* An icon to be displayed next to parent menu of expanded sub menus. */
    });

    $('.has-submenu span').click(function(){
        $('.submenu').toggle(1000);
    });

    $('.carousel-1').owlCarousel({
        loop:true,
        autoplay: true,
        autoplaySpeed: 500,
        margin:0,
        responsiveClass:true,
        nav: false,
        items: 1
    });

    $('.carousel-2').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('.carousel-3').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });

    $('.carousel-4').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })



    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       100,          // custom
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();
});
