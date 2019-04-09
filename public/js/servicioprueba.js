function buscar_institucion(pid) {
    let lugar = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/buscar_institucion",
        method: "POST",
        data: {
            id: pid
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false
    });

    request.done(function (msg) {
        lugar = msg.institucion;
    })
    
    return lugar;
}