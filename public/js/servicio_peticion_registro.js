'use stric';

let verificar_codigo = (pcompania, pcodigo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/validar_codigo",
        method: 'post',
        data: {
            ajaxid: 4,
            cedula_compania: pcompania,
            codigo: pcodigo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        async: false
    });

    request.done(function (msg) {

        let c = msg;

        if (msg.success) {

            window.location.href='inicio.html'

        } else {
            swal.fire({
                type: 'error',
                title: 'error!',
                text: msg.mensaje
            });

        }

    });
    request.fail(function (jqXHR, textStatus) { });
};
