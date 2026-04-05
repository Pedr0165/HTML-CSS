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
        let i = 0
        for (i; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}