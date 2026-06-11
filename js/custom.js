//== Back Top Top ==//
var back_to_top_interval;
$(document).ready(function() {
    $("#back-to-top").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 70) {
                show_back_to_top();
            } else {
                hide_back_to_top();
            }
        });
        $("#back-to-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

function show_back_to_top() {
    $("#back-to-top").fadeIn(500);
    clearInterval(back_to_top_interval);
    back_to_top_interval = setTimeout(hide_back_to_top, 5000);
}

function hide_back_to_top() {
    clearInterval(back_to_top_interval);
    $("#back-to-top").fadeOut(500);
}


//== Variables ==//
var headerHight = $('#site-header').height();
var menuHeight = $('#main-menu').height();
var pageheight = $(window).height();


//== Tooltip ==//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});


//== Menu ==//
if ($(window).width() >= 1025) {
    $('.dropdown-toggle').removeAttr('data-bs-toggle');
}
if ($(window).width() >= 768) {
    $('.dropdown').hover(
        function() {
            $(this).addClass('open');
        },
        function() {
            $(this).removeClass('open');
        }
    );
}
if ($(window).width() <= 767) {
    $('.navbar .navbar-collapse').css({
        height: pageheight - 120
    });
    $('.navbar').addClass('sidebar-nav');

    function closeMobileMenu() {
        $('nav.navbar').removeClass('showmenu');
        $('nav.navbar').animate({
            left: '-100%'
        });
        $('body').css({
            overflow: 'visible'
        });
        $('.menu-fade').hide(100);
        $('.navbar-toggler').removeClass('closed');
        $('.nav-item').removeClass('show-item');
    }

    $('.navbar-toggler').click(function() {
        if ($('nav.navbar').hasClass('showmenu')) {
            closeMobileMenu();
        } else {
            $('nav.navbar').addClass('showmenu');
            $('nav.navbar').animate({
                left: '0'
            });
            $('body').css({
                overflow: 'hidden'
            });
            $('.menu-fade').show(100);
            $(this).addClass('closed');

            var animateThese = document.getElementsByClassName("nav-item");
            Array.from(animateThese).forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("show-item");
                }, 100 * index);
            });
        }
    });

    $('.menu-fade').click(closeMobileMenu);
    $('.navbar-close').click(closeMobileMenu);

    $('.navbar-nav [data-bs-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var $parent = $(this).parent();
        $parent.siblings().removeClass('open');
        $parent.toggleClass('open');
    });
}


//== Anchor Link ==//
if ($(window).width() >= 768) {
    $('.anchorlink').css({
        height: menuHeight,
        marginTop: -menuHeight
    });
} else {
    $('.anchorlink').css({
        height: headerHight,
        marginTop: -headerHight
    });
}

$('a.anchorurl[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});


//== Sticky Header ==//
if ($(window).width() >= 768) {
    menu = $('#site-header');
    origOffsetY = menu.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= headerHight) {
            menu.addClass('sticky-fixed');
            $('body').css({
                marginTop: menuHeight
            });
        } else {
            menu.removeClass('sticky-fixed');
            $('body').css({
                marginTop: '0px'
            });
        }
    });
} else {
    header = $('#site-header');
    origOffsetY = header.offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            header.addClass('sticky-fixed');
            //$('body').css({marginTop: headerHight});
        } else {
            header.removeClass('sticky-fixed');
            //$('body').css({marginTop: '0px'});
        }
    });
}

// Data Background image
$(".data-src").each(function() {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }
        var mediaQuery = function(v, ov) {
            return "(-webkit-min-device-pixel-ratio: " + v + ")," +
                "(min--moz-device-pixel-ratio: " + v + ")," +
                "(-o-min-device-pixel-ratio: " + ov + ")," +
                "(min-resolution: " + v + "dppx)"
        };
    } else {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background-image', 'url(' + attr + ')');
        }
        var mediaQuery = function(v, ov) {
            return "(-webkit-min-device-pixel-ratio: " + v + ")," +
                "(min--moz-device-pixel-ratio: " + v + ")," +
                "(-o-min-device-pixel-ratio: " + ov + ")," +
                "(min-resolution: " + v + "dppx)"
        };
        if (window.matchMedia(mediaQuery('1.5', '3/2')).matches) {
            var attr2x = $(this).attr('data-2x');
            if (typeof attr2x !== typeof undefined && attr2x !== false) {
                $(this).css('background-image', 'url(' + attr2x + ')');
            }
        }
    }
});

// Footer DF Logo
jQuery(document).ready(function() {
    setTimeout(function() {
        jQuery(".webauthorv1").each(function() {
            var dfheight = $(this).height() - 9;
            jQuery(this).css({
                paddingLeft: dfheight + 7
            });
            jQuery(this).find('.dflogo').attr({
                width: dfheight + 'px',
                height: dfheight + 'px'
            });
        });
    }, 2000);
});