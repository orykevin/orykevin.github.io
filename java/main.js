$(document).ready(function () {

    $('.ham-btn').click(function () {
        $('.setting').fadeIn('fast');
    })
    $('.setting-close-btn').click(function () {
        $('.setting').fadeOut();
    });
    $('.profile').click(function () {
        $('.profile svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        $('.slide-container div:first-child').find('span').addClass('active-slide');
        $('.all-content-slide div:first-child').addClass('active');
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });
    //worksflow button>>//

    $('#flow-1').click(function () {
        $('#flow-1 svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });
    $('#flow-2').click(function () {
        $('#img-desk-1').attr('src', 'image/works/worksflow2-1.jpg');
        $('#img-desk-2').attr('src', 'image/works/worksflow2-2.jpg');
        $('#img-desk-3').attr('src', 'image/works/worksflow2-3.jpg');
        $('#img-desk-4').attr('src', 'image/works/worksflow2-4.jpg');
        $('#img-desk-5').attr('src', 'image/works/worksflow2-5.jpg');
        $('#img-mbl-1').attr('src', 'image/works/worksflow-mbl2-1.jpg');
        $('#img-mbl-2').attr('src', 'image/works/worksflow-mbl2-2.jpg');
        $('#img-mbl-3').attr('src', 'image/works/worksflow-mbl2-3.jpg');
        $('#img-mbl-4').attr('src', 'image/works/worksflow-mbl2-4.jpg');
        $('#img-mbl-5').attr('src', 'image/works/worksflow-mbl2-5.jpg');
        $('#flow-2 svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });
    $('#flow-3').click(function () {
        $('#img-desk-1').attr('src', 'image/works/worksflow3-1.jpg');
        $('#img-desk-2').attr('src', 'image/works/worksflow3-2.jpg');
        $('#img-desk-3').attr('src', 'image/works/worksflow3-3.jpg');
        $('#img-desk-4').attr('src', 'image/works/worksflow3-4.jpg');
        $('#img-desk-5').attr('src', 'image/works/worksflow3-5.jpg');
        $('#img-mbl-1').attr('src', 'image/works/worksflow-mbl3-1.jpg');
        $('#img-mbl-2').attr('src', 'image/works/worksflow-mbl3-2.jpg');
        $('#img-mbl-3').attr('src', 'image/works/worksflow-mbl3-3.jpg');
        $('#img-mbl-4').attr('src', 'image/works/worksflow-mbl3-4.jpg');
        $('#img-mbl-5').attr('src', 'image/works/worksflow-mbl3-5.jpg');
        $('#flow-3 svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });
    $('#flow-4').click(function () {
        $('#img-desk-1').attr('src', 'image/works/worksflow4-1.jpg');
        $('#img-desk-2').attr('src', 'image/works/worksflow4-2.jpg');
        $('#img-desk-3').attr('src', 'image/works/worksflow4-3.jpg');
        $('#img-desk-4').attr('src', 'image/works/worksflow4-4.jpg');
        $('#img-desk-5').attr('src', 'image/works/worksflow4-5.jpg');
        $('#img-mbl-1').attr('src', 'image/works/worksflow-mbl4-1.jpg');
        $('#img-mbl-2').attr('src', 'image/works/worksflow-mbl4-2.jpg');
        $('#img-mbl-3').attr('src', 'image/works/worksflow-mbl4-3.jpg');
        $('#img-mbl-4').attr('src', 'image/works/worksflow-mbl4-4.jpg');
        $('#img-mbl-5').attr('src', 'image/works/worksflow-mbl4-5.jpg');
        $('#flow-4 svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });
    $('#flow-5').click(function () {
        $('#img-desk-1').attr('src', 'image/works/worksflow5-1.jpg');
        $('#img-desk-2').attr('src', 'image/works/worksflow5-2.jpg');
        $('#img-desk-3').attr('src', 'image/works/worksflow5-3.jpg');
        $('#img-desk-4').attr('src', 'image/works/worksflow5-4.jpg');
        $('#img-desk-5').attr('src', 'image/works/worksflow5-5.jpg');
        $('#img-mbl-1').attr('src', 'image/works/worksflow-mbl5-1.jpg');
        $('#img-mbl-2').attr('src', 'image/works/worksflow-mbl5-2.jpg');
        $('#img-mbl-3').attr('src', 'image/works/worksflow-mbl5-3.jpg');
        $('#img-mbl-4').attr('src', 'image/works/worksflow-mbl5-4.jpg');
        $('#img-mbl-5').attr('src', 'image/works/worksflow-mbl5-5.jpg');
        $('#flow-5 svg').css({
            "animation": "loading 2500ms ease-in-out infinite alternate"
        });
        setTimeout(function () {
            $('.slide-page').fadeIn();
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }, 2500);
    });


    //<<worksflow button//
    $('.about-gallery img').click(function () {
        var iNdex = $(this).index();
        cardImage = $('.about-gallery img').eq(iNdex);
        cardCart = $('.about-cont img');
        cardCart.attr('src', cardImage.attr('src'));
        var cardImg = $('.card-image').eq(iNdex);
    });

    $('.high-1').click(function () {
        var indeX = $(this).index();
        var highCont = $('.high-1 svg');
        var clickedHigh = $(highCont).eq(indeX);
        clickedHigh.css({
            "animation": "loading-high 4500ms ease-in-out alternate"
        });
    });
    //>> high close window//
    $('.slide-close').click(function () {
        $('.slide-page').fadeOut();
        $('.profile svg').css({
            "animation": ""
        });
        $('.slider').find('span').removeClass('actived');
        $('.slider').find('span').removeClass('active-slide');
        $('.all-content-slide div').removeClass('active');
        window.clearInterval(profileSld);
        window.clearInterval(profileHigh);
    });
    //<< high close window//

    /*-------------- INDEX slide -------------------*/


    function slider() {
        $currentSlide = $('.all-content-slide div.active');
        console.log($currentSlide.length);
        if ($currentSlide.length == 0) {
            $('.all-content-slide div:first-child').addClass('active');
        } else {
            $next = $currentSlide.removeClass('active').next();
            if ($next.length == 0) {
                $('.all-content-slide div:first-child').addClass('active');
            } else {
                $next.addClass('active');
            }
        }
    }


    function sliderHigh() {
        $currentSlider = $('.slide-container span.active-slide');
        if ($currentSlider.length == 0) {
            $('.slide-container div:first-child').find('span').addClass('active-slide');
        } else {
            $next1 = $currentSlider.removeClass('active-slide').addClass('actived').parent().next().children();
            //console.log($next1);
            if ($next1.length == 0) {
                $('.slide-container div:first-child').find('span').addClass('active-slide');
                $('.slider').find('span').removeClass('actived');
            } else {
                $next1.addClass('active-slide');
            }
        }
    }
    $('.toggle-input').change(function () {
        if ($(this).is(':checked')) {
            console.log('checked');
            $('.index').addClass('dark-bg');
            $('p').addClass('wht-font');
            $('h1').addClass('wht-font');
            $('.setting')
        } else {
            console.log('unchecked');
            $('.index').removeClass('dark');
        }
    });
    $('.prev').click(function () {
        $firstSliderr = $("div.slide-container").children().children()[0];
        if (!$firstSliderr.classList.contains("active-slide")) {
            $('.active-slide:last').removeClass('active-slide');
            $('.actived:last').removeClass('actived').addClass('active-slide');
            $('.active:last').removeClass('active').prev().addClass('active');
            console.log('clicked-prev');
            window.clearInterval(profileSld);
            window.clearInterval(profileHigh);
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }
    });
    $('.next').click(function () {
        $lastSliderr = $("div.slide-container").children().children()[$("div.slide-container").children().length - 1];
        if (!$lastSliderr.classList.contains("active-slide")) {
            $('.active-slide:last').removeClass('active-slide').addClass('actived').closest('span').parent().next().children().addClass('active-slide');
            console.log('clicked-next');
            $('.active:last').removeClass('active').next().addClass('active');
            window.clearInterval(profileSld);
            window.clearInterval(profileHigh);
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        } else {
            console.log("Last Page!!");
            $(".actived").removeClass();
            $(".active-slide").removeClass();
            $('.all-content-slide div').removeClass('active');
            $('.slide-container div:first-child').find('span').addClass('active-slide');
            $('.all-content-slide div:first-child').addClass('active');
            window.clearInterval(profileSld);
            window.clearInterval(profileHigh);
            profileSld = window.setInterval(slider, 5000);
            profileHigh = window.setInterval(sliderHigh, 5000);
        }
    });
    $(".all-content-slide").mousedown(function (e) {
        console.log("Hold");
        $(".active-slide").css("animation-play-state", "paused");
        window.clearInterval(profileSld);
        window.clearInterval(profileHigh);
    }).mouseup(function (e) {
        console.log("Release");
        $(".active-slide").css("animation-play-state", "running");
        profileSld = window.setInterval(slider, 5000);
        profileHigh = window.setInterval(sliderHigh, 5000);
    });
    /*-------------- slide -------------------*/

    // follow code>> //   
    $('.follow-mouse').click(function () {
        $('.index-follow-cont').show();
    });
    $('.index-follow-cont').mouseleave(function () {
        $('.index-follow-cont').hide();
    });

    $('.follow-clk').click(function () {
        $('.follow').show();
    });
    $('.follow').mouseleave(function () {
        $('.follow').hide();
    });

    $('.ham-bar').click(function () {
        $('.menu-cont').animate({
            height: 'toggle'
        });
        $('.close-bar').show();
        $('.ham-bar').hide();
    });
    $('.close-bar').click(function () {
        $('.menu-cont').animate({
            height: 'hide'
        });
        $('.ham-bar').show();
        $('.close-bar').hide();
    });
    //<< follow code //
    //chat//
    setTimeout(function () {
        $('.notif-icon').show();
        $('audio#pop')[0].play();
        $('.chat-bubble-1').show();
    }, 2500);
    setTimeout(function () {
        $('.notif-icon').text('2');
        $('audio#pop2')[0].play();
        $('.chat-bubble-2').show();
    }, 7000);

    $('.chat-icon').click(function () {
        $('.bot-chat').show();
    });
    $('.chat-close').click(function () {
        $('.bot-chat').hide();
        $('.notif-icon').hide();
    });
    $('.type-chat-box img').click(function () {
        $('.chat-bubble-cont').prepend('<div class="sent-bubble-1"><div class="sent-img"></div><p> </p></div>');
        var inVal = $('.input-type').val();
        $('.sent-bubble-1').children('p').first().text(inVal);
        $(".input-type").val("");
        var html = $(".sent-bubble-1").children('p').first().html();
        html = html.substring(0, 19) + "<br>" + html.substring(19);
        $(".sent-bubble-1").children('p').first().html(html);
        var html1 = $(".sent-bubble-1").children('p').first().html();
        html1 = html1.substring(0, 44) + "<br>" + html1.substring(44);
        $(".sent-bubble-1").children('p').first().html(html1);
    });
    $('.input-type').keypress(function (e) {
        if (e.which == 13) {
            $('.chat-bubble-cont').prepend('<div class="sent-bubble-1"><div class="sent-img"></div><p> </p></div>');
            var inVal = $('.input-type').val();
            $('.sent-bubble-1').children('p').first().text(inVal);
            $(".input-type").val("");
            var html = $(".sent-bubble-1").children('p').first().html();
            html = html.substring(0, 19) + "<br>" + html.substring(19);
            $(".sent-bubble-1").children('p').first().html(html);
            var html1 = $(".sent-bubble-1").children('p').first().html();
            html1 = html1.substring(0, 44) + "<br>" + html1.substring(44);
            $(".sent-bubble-1").children('p').first().html(html1);
        }
    });
    $(function () {
        jQuery.get('java/lightslider1.js', function () {
            if (window.matchMedia('(min-width: 104px)').matches) {
                $('#autoWidth').lightSlider({
                    autoWidth: true,
                    loop: false,
                    pager: false,
                    adaptiveHeight: true,
                    slideMargin: 10,
                    freeMove: true,
                    responsive: [],
                    onSliderLoad: function (el) {

                        var maxHeight = 0,
                            container = $(el),
                            children = container.children();

                        children.each(function () {
                            var childHeight = $('.work1').height();
                            if (childHeight > maxHeight) {
                                maxHeight = childHeight;
                            }
                        });
                        container.height(maxHeight);
                    }
                });
            }
        });
    });
});