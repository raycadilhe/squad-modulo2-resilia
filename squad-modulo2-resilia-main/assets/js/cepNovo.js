let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');



cep.addEventListener('blur', function(e){
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularform';
    document.body.appendChild(script);
});

function popularform(resposta){

    if('erro' in resposta){
        alert('Cep não encontrado');
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;

}









document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('senha').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('senha').type = 'password';
  });



  document.getElementById('olhoDois').addEventListener('mousedown', function() {
    document.getElementById('confirmSenha').type = 'text';
  });
  
  document.getElementById('olhoDois').addEventListener('mouseup', function() {
    document.getElementById('confirmSenha').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
  document.getElementById('olhoDois').addEventListener('mousemove', function() {
    document.getElementById('confirmSenha').type = 'password';
  });


 