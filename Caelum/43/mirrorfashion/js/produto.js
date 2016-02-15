$('[name=tamanho]').on('change input', function(){
  $('[name=valortamanho]').text(this.value);
});