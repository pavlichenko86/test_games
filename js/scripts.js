$('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
});