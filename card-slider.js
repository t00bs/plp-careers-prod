<!-- Card Slider Config -->
    $(document).ready(function() {
    // Initialize each slider with its own settings
    $('#cms-slider').slick({
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });

    $('#cms-slider-2').slick({
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 8000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });

    // Control and filter functionality for each slider
    $(".dropdown-link").click(function() {
        var filter = $(this).find('.dropdown-link_slug').text();
        var filterClass = '.' + filter;

        if ($(this).hasClass("cc-selected")) {
            $('#cms-slider, #cms-slider-2').slick('slickUnfilter');
            $(this).removeClass("cc-selected");
        } else {
            $(".dropdown-link").removeClass("cc-selected");
            $(this).addClass("cc-selected");
            
            $('#cms-slider, #cms-slider-2').slick('slickUnfilter');
            $('#cms-slider, #cms-slider-2').slick('slickFilter', filterClass);
        }
    });

    // Separate navigation controls for each slider
    $('#cms-slider-right').click(function() {
        $('#cms-slider').slick('slickNext');
    });
    $('#cms-slider-left').click(function() {
        $('#cms-slider').slick('slickPrev');
    });

    // Assuming you have navigation buttons for the second slider as well
    $('#cms-slider-right-2').click(function() {
        $('#cms-slider-2').slick('slickNext');
    });
    $('#cms-slider-left-2').click(function() {
        $('#cms-slider-2').slick('slickPrev');
    });
});
