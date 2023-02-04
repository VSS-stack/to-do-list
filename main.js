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
    let check = document.createElement('button');
    check.classList.add("check");

    let p = document.createElement('p');
    p.classList.add("item-dscr");
    p.innerText = item[item.length - 1];

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.innerHTML = '<img class="delete-icon" src="./assets/close-icon.png" alt="icone excluir">';

    let elementoLista = document.createElement('li');
    elementoLista.classList.add("item");

    elementoLista.appendChild(check);
    elementoLista.appendChild(p);
    elementoLista.appendChild(btnDelete);
    
    lista.appendChild(elementoLista);
}
