$(document).ready(function () {
    /* ---- Countdown timer ---- */
    $('#counter').countdown({
        timestamp: (new Date()).getTime() + 11 * 24 * 60 * 60 * 1000
    });
    /* ---- Animations ---- */
    $('#links a').hover(function () {
        $(this).animate({
            left: 3
        }, 'fast');
    }, function () {
        $(this).animate({
            left: 0
        }, 'fast');
    });
    $('footer a').hover(function () {
        $(this).animate({
            top: 3
        }, 'fast');
    }, function () {
        $(this).animate({
            top: 0
        }, 'fast');
    });
});
w3ls.render();
w3ls.cart.on('w3sb_checkout', function (evt) {
    var items, len, i;
    if (this.subtotal() > 0) {
        items = this.items();
        for (i = 0, len = items.length; i < len; i++) {}
    }
});
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion           
        width: 'auto', //auto or any width like 600px
        fit: true // 100% fit in a container
    });
});
$('#myModal88').modal('show');
$(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline'
        , fixedContentPos: false
        , fixedBgPos: true
        , overflowY: 'auto'
        , closeBtnInside: true
        , preloader: false
        , midClick: true
        , removalDelay: 300
        , mainClass: 'my-mfp-zoom-in'
    });
});
$('.example1').wmuSlider();
$(window).load(function () {
    $("#flexiselDemo1").flexisel({
        visibleItems: 4
        , animationSpeed: 1000
        , autoPlay: true
        , autoPlaySpeed: 3000
        , pauseOnHover: true
        , enableResponsiveBreakpoints: true
        , responsiveBreakpoints: {
            portrait: {
                changePoint: 480
                , visibleItems: 1
            }
            , landscape: {
                changePoint: 640
                , visibleItems: 2
            }
            , tablet: {
                changePoint: 768
                , visibleItems: 3
            }
        }
    });
});