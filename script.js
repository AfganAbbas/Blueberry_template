$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    navSpeed: 1000,
    navHover: false,
    dragEndSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
            stagePadding: 100
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
            stagePadding: 100
        }
    }
});


