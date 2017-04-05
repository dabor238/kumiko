$(document).ready(function () {
    $('#iniciado').hide();
    $('.iniciarSesion').click(function () {
        $('#iniciado').show();
        $('#iniciar').hide();
    });
    $('.cerrarSesion').click(function () {
        $('#iniciado').hide();
        $('#iniciar').show(); 
    });
    //quotes js
    $('#quote-carousel').carousel({
        pause: true,
        interval: 6000,
    });
    //carrousel js
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        var next2 = next.next();
        if (!next2.length) {
            next2 = $(this).siblings(':first');
        }
        next2.children(':first-child').clone().appendTo($(this));

        var next3 = next2.next();
        if (!next3.length) {
            next3 = $(this).siblings(':first');
        }
        next3.children(':first-child').clone().appendTo($(this));
    });
    //end carrousel js
    
});