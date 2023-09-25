let inputTarefa = document.querySelector('.inputTarefa')
let btnAddTarefa = document.querySelector('.btnAddTarefa')
let tarefas = document.querySelector('.tarefas')


function criaLi(){
    let li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
    if (!inputTarefa.value)
    return
    criaTarefa(inputTarefa.value)
    }
})

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaTarefa(textoInput){
    let li = criaLi()
    li.innerText = textoInput

    tarefas.appendChild(li)
    limpaInput()
}

btnAddTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value)
    return
    criaTarefa(inputTarefa.value)
})