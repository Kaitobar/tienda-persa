window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 2.5,
        slidesToScroll: .5,
        draggable: true,
        dots: '.dots',
        arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
        }
    });
});