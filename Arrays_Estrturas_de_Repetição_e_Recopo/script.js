//array vazio
let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {       
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}
//função de renderizar tarefa na tela
function renderizarTarefas () {
        const listaTarefas = document.getElementById("listaTarefas")
        //limpando a lista       
        listaTarefas.innerHTML = ""

        //estrutura de repetição(loop)
        //for( iterador,condição, frequencia)
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

            //Criando um novo botão para remover coisas da lista 
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)
        

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    //Splice serve para adicionar, remover ou substituri algo na lista 
    tarefas.splice(i, 1)
    renderizarTarefas()
}  
function editarTarefa(i) {
    //
    let tarefaEditada = prompt ("editar a tarefa: ")

    
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista (){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
}