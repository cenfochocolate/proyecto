'use stric';
function getProvincias(id_select) {
    let html;

    $.ajax({
        dataType: "json",
        url: "https://ubicaciones.paginasweb.cr/provincias.json",
        data: {},
        success: function (data) {

            html = "<select>";

            html += "<option value='" + 0 + "'>Seleccione</option>";

            for (key in data) {
                html += "<option value='" + key + "'>" + data[key] + "</option>";
            }
            html += "</select";

            //return html;

           // $('#select_provincia').html(html);
            $(id_select).html(html);
        }

    });
     //return html;
};

let getCantones = (id_select, id_provincia) => {

    $.ajax({
        dataType: "json",
        url: "https://ubicaciones.paginasweb.cr/provincia/" + id_provincia + "/cantones.json",
        data: {},
        success: function (data) {
            let html = "<select>";
            for (key in data) {
                html += "<option value='" + key + "'>" + data[key] + "</option>";
            }
            html += "</select";

            //7 return html;

            $(id_select).html(html);
        }

    });
};

let getDistritos = (id_select,id_provincia, id_canton) => {

    $.ajax({
        dataType: "json",
        url: "https://ubicaciones.paginasweb.cr/provincia/" + id_provincia + "/canton/" + id_canton + "/distritos.json",
        data: {},
        success: function (data) {

            let html = "<select>";
            for (key in data) {
                html += "<option value='" + key + "'>" + data[key] + "</option>";
            }
            html += "</select";
           // return html;
            $(id_select).html(html);
        }

    });
};
