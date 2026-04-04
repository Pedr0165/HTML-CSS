function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    //O ".trim" significa "aparar", serve para retirar os espaços
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")
    
    //se o valo do input for vazio então mostrar uma mensagme de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem de erro
          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent= mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagemSucesso.textContent = mensagemSucesso

            //cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)
    }

    //limpa o input do usuário
    inputTarefa.value = ""
    
}