'use stric';


let registrar_materiales = (pnombre_institucion, pdescripcion) => {
        let request = $.ajax({
                url: "http://localhost:4000/api/registrar_materiales",
                method: "POST",
                data: {

                        nombre_institucion: pnombre_institucion,
                        descripcion: pdescripcion

                },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: "json"
        });

        request.done(function (msg) {
                swal.fire({
                        type: 'success',
                        title: 'Material informativo registrado',
                        text: `El  registro se hizo correctamente` 
                });
        });

        request.fail(function (jqXHR, textStatus) {

        });
};

let listar_materiales = () => {
        let lista_material = [];
        
        let request = $.ajax({
                url: "http://localhost:4000/api/listar_material",
                method: "GET",
                data: {

                },
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                dataType: "json",
                async: false
        });

        request.done(function (res) {
                lista_material = res.material;

        });

        request.fail(function (jqXHR, textStatus) {

        });
        return lista_material;
};
let buscar_material = (id_material) => {
        let material = [];
      
        let request = $.ajax({
          url: "http://localhost:4000/api/buscar_material/"+ id_material,
          method: "GET",
          data: {
          },
          dataType: "json",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          async : false
        });
      
        request.done(function (res) {
            material = res.material;
          
        });
      
        request.fail(function (jqXHR, textStatus) {
          
        });
        return material;
       
      };
      
      
      let actualizar_material = (pnombre_institucion, pdescripcion, pid) => {
        let request = $.ajax({
            url: "http://localhost:4000/api/actualizar_material",
            method: "POST",
            data: {
                nombre_institucion: pnombre_institucion,
                descripcion: pdescripcion,
                id: pid
             
                 },
                 
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        });
      
        request.done(function (res) {
          
            swal.fire({
                type: 'success',
                title: 'Material actualizado correctamente',
                text: res.msg,
                onClose: () => {
                  window.location.href = 'listar_material.html';
                }    
            });
      
        });
      
        request.fail(function (res) {
            swal.fire({
                type: 'error',
                title: 'Material no actualizado',
                text: res.msg
               
            });
        });
      };
      