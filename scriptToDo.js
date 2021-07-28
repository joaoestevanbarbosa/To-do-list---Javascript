 /* criando a lista de tarefas após preencher a caixa e clicar no botao add */
function addTarefa() {
  const li = document.createElement("li"); //criando li
    const  inputCaixa = document.getElementById("caixaDeTexto").value; //retornado o valor do input da caixa de texto
    const  texto = document.createTextNode(inputCaixa); //transformando o valor do input em texto
    li.appendChild(texto); //adicionando o texto no li;
    if (inputCaixa === '') {
        alert("Você precisa digitar a tarefa!");
        } else {
        document.getElementById("lista").appendChild(li); //adicionando os passos anteriores na ul, ou seja na lista de tarefas;
        }
    document.getElementById("caixaDeTexto").value = ""; //limpando a caixa de texto

    /* criando botao de remocao e alocando junto ao texto de tarefas */
    const botaoX = document.createElement("button"); //criando o botao
    const x = document.createTextNode("x"); //para 'nomear' o botao de remocao;
    botaoX.className = "fechar"; //definindo a classe do botao de remocao
    botaoX.appendChild(x); //amarrando o nome ao botao de remover
    li.appendChild(botaoX); //amarrando o botao de remover as novas tarefas

    /* fazendo o botao de remocao funcionar */
    const close = document.getElementsByClassName("fechar"); //pegando o botao pela classe
    for (let i = 0; i < close.length; i++) { //lendo o evento no 
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"; //retornando toda a tarefa como div e escondendo-a
        } 
  }
}
