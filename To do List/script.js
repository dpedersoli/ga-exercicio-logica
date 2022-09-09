//fazer uma 'to do list' adicionando o item clicando no botão ou dando 'enter'
//min 22 -> se eu mudar para um 'form' eu posso tirar as duas funções iguais e deixar tudo em 1 só

const input = document.getElementById('inputField');
const button = document.getElementById('addItem');
const list = document.getElementById('list');

function addItem (){
  const newItem = `
  <li id="item">${input.value}</li>
  `
  return list.innerHTML += newItem;

}

input.addEventListener('keyup', function(e){
  if (e.key === 'Enter') {
    e.preventDefault();
    
    const newItem = `
    <li id="item">${input.value}</li>
    `
    return list.innerHTML += newItem;
    
  }
})

button.addEventListener('click', addItem)