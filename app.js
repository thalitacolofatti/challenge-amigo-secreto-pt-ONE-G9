let amigos = [];
let nome = document.querySelector('input');
let botaoAdiciona = document.getElementById('botao-adiciona');
let indices = [];

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

function listaAmigos() {
    let lista = document.getElementById('listaAmigos'); 
    let listaHTML = lista.innerHTML; 
    listaHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li> ${amigos[i]} </li>`; 
        // console.log(listaHTML); debug para exibição de cada item da lista
    }
    
    lista.innerHTML = listaHTML; 
}

function limparListaAmigos() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');
    let contadorAmigos = amigos.length;
    let indicesDisponiveis = [];
   
    if (contadorAmigos == 0) {
        alert('Não há amigos para sortear.');
        return;
    } if (contadorAmigos == 1) {
        alert('Há apenas um amigo para sortear. Adicione mais amigos.');
        return;
    } if (indices.length == contadorAmigos) {
        indices = [];
        amigoSorteado.innerHTML = '<li>Todos já foram sorteados! Atualize a página para uma nova lista e novo sorteio.</li>'
        return;
    } 

    for (let i = 0; i < contadorAmigos; i++) {
        if (!indices.includes(i)) {
            indicesDisponiveis.push(i);
        }
    }

    let sorteio = Math.floor(Math.random() * indicesDisponiveis.length);
    let indiceEscolhido = indicesDisponiveis[sorteio];

    indices.push(indiceEscolhido);

    amigoSorteado.innerHTML = `<li>Seu amigo secreto é ${amigos[indiceEscolhido]}</li>`;

    // console.log(`indiceescolhido ${indiceEscolhido}`); // debug para visualizar o indice escolhido
    // console.log(`sorteio ${sorteio}`);
    // console.log(`indices ${indices}`); // debug para visualizar a lista de indices já sorteados
    // console.log(amigos); // debug para a acompanhar a lista e verificar se corresponde aos indices
    // console.log(`amigo sorteado ${amigos[indiceEscolhido]}`); // debug para o amigo sorteado
}