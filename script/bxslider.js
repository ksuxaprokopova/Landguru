let slider  = $(".testimunial_carusel").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    slideWidth: 500,
});

$(".button_arrow_back").click(e =>{
    e.preventDefault();
    console.log(slider)
    slider.goToPrevSlide()
});

$(".button_arrow").click(e =>{
    e.preventDefault();
    console.log(slider)
    slider.goToNextSlide()
});