let amigos = [];
let nome = document.querySelector('input');
let botaoAdiciona = document.getElementById('botao-adiciona');

function adicionarAmigo() {
    let amigo = nome.value;

    if (amigo == '' || amigo == ' ') {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        nome.value = '';
        listaAmigos();
    }
    // console.log(amigos); debug para lista array
}
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            botaoAdiciona.click(); 
            // console.log('enter'); debug para enter pressionado
        }
    });
});

function listaAmigos(){
    const lista = document.getElementById('listaAmigos'); 
    let listaHTML = lista.innerHTML; 
    listaHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
      listaHTML += `<li> ${amigos[i]} </li>`; 
      // console.log(listaHTML); debug para exibição de cada item da lista
    }
    
    lista.innerHTML = listaHTML; 
}
