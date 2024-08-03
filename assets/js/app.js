/*var btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click',function(){
    var nombre = document.getElementById('txtNombre');
    var correo = document.getElementById('txtCorreo');
    var descripcion = document.getElementById('txtDescripcion');
    
    alert('INFORMACION : ${nombre.value}) ${email.value} ${descripcion.value}');
});*/

// Mueve esta línea al principio para prevenir el comportamiento por defecto.
$(()=>{
    $('#selector-universal').click(()=>{
        $('*').addClass('selector');
    });
    $('#selector-id').click(()=>{
        $('#txtCorreo').addClass('selector');
    });
    $('#selector-class').click(()=>{
        $('.form-control').addClass('selector');
    });
    $('#selector-button').click(()=>{
        $('button').addClass('selector');
    });
    $('#selector-div').click(()=>{
        $('div').addClass('selector');
    });
    $('#selector-form').click(()=>{
        $('form').addClass('selector');
    });
});
$('#btEnviar').click(function(){
    var nombre = $('#txtNombre').val();
    var email = $('#txtCorreo').val();
    var mensaje = $('#txtMensaje').val();
})

    $.ajax({
        url: 'http://localhost:5155/kalum-notification/v1/notifications',
        method: 'post',
        data: JSON.stringify({
            email: correo, // Asegúrate de usar la variable 'correo' aquí.
            subject: `Solicitud de información de ${nombre}`, // Corrección de 'subjetct' a 'subject'.
            body: mensaje,
            type: "information"
        }),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        success: function(data) {
            alert(data.message);
        },
        error: function(e) {
            alert("Error al momento de llamar al servicio");
            console.log(e);
        }
    });

