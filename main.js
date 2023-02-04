const form = document.getElementById('form-tarefa');

const novosItens = [];

var lista = document.getElementById('lista-itens');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    criarItem(event);

    exibirItens(novosItens);
});

function criarItem(event) {
    const novoItem = event.target.elements.input;

    novosItens[novosItens.length] = novoItem.value;

    novoItem.value = '';

    console.log(novosItens);
}

function exibirItens(item) {

    lista += lista.innerHTML =  `
        <li class="item">
            <button class="check"></button>
            <p class="item-dscr">${item[item.length - 1]}</p>
        <button class="btn-delete"><img class="delete-icon" src="./assets/close-icon.png" alt="icone excluir"></button>
        </li>
    `
}
