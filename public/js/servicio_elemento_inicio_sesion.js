$(function () {

    let imagen_url = '';

    $.cloudinary.config({ cloud_name: 'dkhxubj06', api_key: '514167216268182' });

    let updateButton = $('#btn_cargar_doc');


    updateButton.on('click', function (e) {

        cloudinary.openUploadWidget({
            cloud_name: 'dkhxubj06', upload_preset: 'kenaguilar7',
            tags: ['cgal']
        },
            function (error, result) {

                if (error) {
                    console.log(error)
                    document.querySelector('#input_cargar_doc').style.borderColor = "red";
                }
                else {

                    let id = result[0].public_id;
                    console.log(id);
                    imagen_url = 'https://res.cloudinary.com/dkhxubj06/image/upload/' + id;
                    document.querySelector('#btn_cargar_doc').src = imagen_url;
                    document.querySelector('#input_cargar_doc').style.borderColor = "green";
                }
            });


    });


})

function processImgae(id) {
    let options = { client_hints: true, };
    return $.cloudinary.url(id, options);
}