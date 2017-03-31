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
    
});