$(function(){
  let archivoURL = '';

  $.cloudinary.config({ cloud_name: 'cenfochocolate', api_key: '183746995748248'});

  let uploadButton = $('#btn_arc');

  uploadButton.on('click',function(e){

    cloudinary.openUploadWidget({cloud_name: 'cenfochocolate', upload_preset: 'chocolate',
    tags: ['cgal']},
    function(error,result){
      if(error) console.log(error);

      let id = result[0].public_id;
      console.log(id);
      imagenURL = 'https://res.cloudinary.com/cenfochocolate/image/upload/' + id;
      document.querySelector('#previewarc').src = archivoURL;
      console.log(archivoURL);
    });
  });
})
