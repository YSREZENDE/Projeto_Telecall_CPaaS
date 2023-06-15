var verificacao = 0;


function entrou() {
  if (verificacao == 0) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "cadastro.html";
  }
  
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
}

  
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "index.html";
  }