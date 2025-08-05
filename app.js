let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input');
    let amigo = nome.value;

    if (amigo == '' || amigo == ' ') {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        nome.value = '';
    }
    // console.log(amigos);
}
