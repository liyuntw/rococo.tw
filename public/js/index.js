$(document).ready(function () {
    /***** hamburger clicked *****/
    $("#hamburger").click(function () {
        var clicks = $(this).data('clicks');
        if (clicks) {
            // odd clicks
            console.log("#hamburger odd clicks");
            console.log("click x");
            $("#nav ul").removeAttr("id");
            $("#hamburger").removeClass("open");
            //$("#fixedIcons").addClass("show");
            $("body").css("overflow", "auto");
        } else {
            // even clicks
            console.log("#hamburger even clicks");
            $("#nav ul").css("display", "block");
            $("#nav ul").attr("id", "openHamburger");
            $("#hamburger").addClass("open");
            //$("#fixedIcons").removeClass("show");
            $("body").css("overflow", "hidden");
        }
        $(this).data("clicks", !clicks);

        $("#nav ul li").click(function () {
            $("#nav ul").removeAttr("id");
            $("#hamburger").removeClass("open");
            //$("#fixedIcons").addClass("show");
            $("body").css("overflow", "auto");
        })
    })



    /***** slick slider control *****/
    $(".regular").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });
    if (screen.width > 480) {
        $(".woodSlider").css("display", "none");
    }
    if (screen.width < 480) {
        $("#woodMaterial").css("display", "none");
    }
    $(".woodSlider").slick({
        dots: true,
        infinite: false,
        //centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $(".woodSet").click(function () {
        console.log(".woodset", $(this));
        var id = $(this).attr('id');
        console.log("woodset id", id);
        var kitchen_url = "./img/wood/kitchen_" + id + ".jpg";
        var parlor_url = "./img/wood/parlor_" + id + ".jpg";
        var room_url = "./img/wood/room_" + id + ".jpg";
        console.log("kitchen_url", kitchen_url);
        $(".regular.slider #s_kitchen").attr("src", kitchen_url);
        $(".regular.slider #s_parlor").attr("src", parlor_url);
        $(".regular.slider #s_room").attr("src", room_url);

        /* ref:https://stackoverflow.com/questions/18101673/jquery-get-all-src-of-images-in-div-and-put-into-field*/
        // var imagesURL = $('.sliderDiv').children('img').map(function () {
        //     return $(this).attr('src')
        // }).get();
        // var replaceImgURL = imagesURL.map(function (el) {
        //     var materialURL;
        //     if (el.match("room")) {
        //         console.log("match,room", el);
        //         materialURL = el.substring(0, 16) + id + ".jpg";
        //         return materialURL;
        //     } else if (el.match("parlor")) {
        //         console.log("match parlar", el);
        //         materialURL = el.substring(0, 18) + id + ".jpg";
        //         return materialURL;
        //     } else if (el.match("kitchen")) {
        //         console.log("match kitche", el);
        //         materialURL = el.substring(0, 19) + id + ".jpg";
        //         return materialURL;
        //     } else {
        //         console.log("no found");
        //     }
        // })
        // console.log("img urls", imagesURL, replaceImgURL);
        // $('.sliderDiv').children('img').map(function (idx) {
        //     console.log(idx, replaceImgURL[idx]);
        //     $(this).attr("src", replaceImgURL[idx]);
        // }).get();
        $('.regular').slick('slickPause');
    })

    $(".woodImg_m").click(function () {
        console.log($(this));
        var id = $(this).attr('id');
        console.log("===.woodSet_m===", id);
        var kitchen_url = "./img/wood/kitchen_" + id + ".jpg";
        var parlor_url = "./img/wood/parlor_" + id + ".jpg";
        var room_url = "./img/wood/room_" + id + ".jpg";
        $(".regular.slider #s_kitchen").attr("src", kitchen_url);
        $(".regular.slider #s_parlor").attr("src", parlor_url);
        $(".regular.slider #s_room").attr("src", room_url);
        $('.regular').slick('slickPause');
    })


    $('a').click(function (event) {
        console.log("click a");
        console.log($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
    $('#goTop').click(function (event) {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 500);
    });

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
        fixedIconsInView();
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');

    function fixedIconsInView() {
        var window_height = $(window).height();
        var height = $(window).scrollTop();
        console.log("fixediconsinview", window_height, height);
        //var checkMenuOpen = $("#hamburger").hasClass("open");
        //console.log("checkMenuOpen", checkMenuOpen);
        if ($(document).scrollTop() > window_height) {
            $("#fixedIcons").addClass("show");
        } else {
            $("#fixedIcons").removeClass("show");
        }
    }

    $(window).scrollTop(function () {
        console.log("scroll", $(window).scrollTop(), $(document).scrollTop());
    })

    /* parallax ref:https://www.devstreak.com/parallax-scrolling-effect-with-pure-javascript/*/
    var parallax = document.querySelector(".parallax");
    window.addEventListener("scroll", function () {
        var scrolledHeight = window.pageYOffset,
            limit = parallax.offsetTop + parallax.offsetHeight;
        console.log("scrollHeight", scrolledHeight);
        console.log("limit", parallax.offsetTop, parallax.offsetHeight, limit);
        if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
            parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
            console.log("backgroundPositionY", parallax.style.backgroundPositionY);
        }
        else {
            parallax.style.backgroundPositionY = "0";
        }
    });

    function preloader() {
        var images = new Array();
        function preload() {
            for (i = 0; i < preload.arguments.length; i++) {
                images[i] = new Image()
                images[i].src = preload.arguments[i]
            }
        }

        var urls = [];
        var woodName = ['birch', 'cherry', 'elm', 'fir', 'maple', 'oak', 'olive', 'paulownia', 'pine', 'robinia', 'teak'];
        woodName.map(function (ele, i) {
            urls.push('./img/wood/kitchen_' + ele + '.jpg');
            urls.push('./img/wood/room_' + ele + '.jpg');
            urls.push('./img/wood/parlor_' + ele + '.jpg');
            console.log("urls", ele, urls);
        });
        preload.apply(null, urls);
    }

    preloader();
});