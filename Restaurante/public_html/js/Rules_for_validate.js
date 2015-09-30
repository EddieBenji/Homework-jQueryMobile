/**
 * Created by lalo on 29/09/15.
 */


$.validator.setDefaults({
    submitHandler: function () {
        alert("Datos Enviados!");
        window.location.href="index.html";
    }
});
$(document).on('pageinit', function () { // <-- you must use this to ensure the DOM is ready

    $("#reservaciones").find("form").validate({
        rules: {
            nombre: "required",
            apellido: "required",
            email: {
                required: true,
                email: true
            },
            fecha: {
                required: true
            },
            hora: "required"
        },
        messages: {
            nombre: "Por favor, escriba su nombre",
            apellido: "Por favor, escriba su apellido",
            email:{
                required: "Por favor, escriba su correo"
            },
            fecha: "Por favor, escriba una fecha válida",
            hora:"Por favor, escriba una hora válida"
        }
    });

});