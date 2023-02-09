const form = document.getElementById('form-tarefa');

const novosItens = [];

var lista = document.getElementById('lista-itens');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    criarItem(event);

    exibirItens(novosItens);

    darCheckItens(btnCheck);

    deletarItens(btnDelete);
});

function criarItem(event) {
    const novoItem = event.target.elements.input;

    novosItens[novosItens.length] = novoItem.value;

    novoItem.value = '';
}

function exibirItens(item) {
    btnCheck = document.createElement('button');
    btnCheck.classList.add("check");

    p = document.createElement('p');
    p.classList.add("item-dscr");
    p.innerText = item[item.length - 1];

    btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.innerHTML = '<img class="delete-icon" src="./assets/close-icon.png" alt="icone excluir">';

    elementoLista = document.createElement('li');
    elementoLista.classList.add("item");

    elementoLista.appendChild(btnCheck);
    elementoLista.appendChild(p);
    elementoLista.appendChild(btnDelete);
    
    lista.appendChild(elementoLista);
}

function darCheckItens(botao) {
    botao.addEventListener('click', (event) => {
        if(event.target.classList[1] === 'ativo') {
            event.target.classList.remove('ativo');
        }else {
            event.target.classList.add('ativo');
        }
    });
}

function deletarItens(botao) {
    botao.addEventListener('click', (event) => {
        event.target.parentNode.parentNode.remove();
        novosItens.splice(novosItens.indexOf(event.target.parentNode.parentNode.childNodes[1].innerText), 1);
    });
}
