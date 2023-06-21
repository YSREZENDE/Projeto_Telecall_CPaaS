
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let nome_m = document.querySelector('#nome_m')
let labelNomeM = document.querySelector('#labelNomeM')
let validNomeM = false



let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let cep = document.querySelector('#cep')
let labelCEP = document.querySelector('#labelCEP')
let validCep = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 14){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome Completo: *Insira no mínimo 15 e no máximo 60 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome Completo:'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

nome_m.addEventListener('keyup', () => {
  if(nome_m.value.length <= 14){
    labelNomeM.setAttribute('style', 'color: red')
    labelNomeM.innerHTML = 'Nome Materno: *Insira no mínimo 8 caracteres'
    nome_m.setAttribute('style', 'border-color: red')
    validNomeM = false
  } else {
    labelNomeM.setAttribute('style', 'color: green')
    labelNomeM.innerHTML = 'Nome Materno: *'
    nome_m.setAttribute('style', 'border-color: green')
    validNomeM = true
  }
})

cep.addEventListener('keyup', () => {
  if(cep.value.length <= 7){
    labelCEP.setAttribute('style', 'color: red')
    labelCEP.innerHTML = 'CEP: *Insira no minimo 8 caracteres'
    cep.setAttribute('style', 'border-color: red')
    validCEP = false
  } else {
    labelCEP.setAttribute('style', 'color: green')
    labelCEP.innerHTML = 'CEP:'
    cep.setAttribute('style', 'border-color: green')
    validCEP = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 5){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário: *Insira no minimo 6 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário:'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 7){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha: *Deverá conter 8 caracteres alfabéticos'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha:'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha: *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha:'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Usuário cadastrado com sucesso!'
    })
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'cadastro.html'
    }, 3000)
  
    
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Prencha todos os campos corretamente!',  
    })
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})


/// CPF//

function _cpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
  add = 0;
  for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
      rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
      return false;
  add = 0;
  for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
      rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
      return false;
  return true;
}

function validarCPF(el){
  if( !_cpf(el.value) ){

    el.style.borderColor = 'red';
    var msgError = document.getElementById('msgError');
    labelcpf.innerHTML = 'CPF: *CPF inválido'
    msgError.innerHTML = mensagem;
    msgError.style.color = 'red';
    

  }else{
    el.style.borderColor = 'green';
    msgError.innerHTML = mensagem;
    msgError.style.color = 'green';
    


  }
}
function cpf(cpf){ 
  

  if(cpf.value.length == 0)
      cpf.value = '' + cpf.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
  if(cpf.value.length == 3)
      cpf.value = cpf.value + '.'; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

  if(cpf.value.length == 7)
  cpf.value = cpf.value + '.'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
  if(cpf.value.length == 11)
  cpf.value = cpf.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}



// CEP //
 

function buscarEnderecoPorCEP() {
  var cep = document.getElementById('cep').value;
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Erro ao buscar endereço');
      }
      return response.json();
    })
    .then(function(data) {
      if (data.erro) {
        console.error('CEP não encontrado');
      } else {
        document.getElementById('end').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}

function validarCelular() {
  const inputNumero = document.getElementById('numeroCelular');
  let numero = inputNumero.value;

  // Remove todos os caracteres não numéricos
  const numeroLimpo = numero.replace(/\D/g, '');

  // Verifica se o número possui 11 dígitos (incluindo o DDD)
  if (numeroLimpo.length === 16) {
    // Aplica a máscara "(XX) XXXXX-XXXX"
    numero = numeroLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  // Atualiza o valor do input com o número formatado
  inputNumero.value = numero;
}

function mascara(telefone){ 
  

  if(telefone.value.length == 0)
      telefone.value = '(+' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
  if(telefone.value.length == 4)
      telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

  if(telefone.value.length == 8)
      telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}


