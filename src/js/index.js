/*
    quando clicar na aba mostrar apenas o conteudo da aba
    que foi selecionada e esconder o outro 

    - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da aba
    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    - passo 4 - marcar a aba clicada como selecionado
    - passo 5 - esconder o conteúdo anterior
    - passo 6 - mostrar o conteúdo da aba selecionada
*/

const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionada")) {
      return;
    }

    selecionarAba(aba);

    mostrarAbaInformacao(aba);
  });
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionada");
  abaSelecionada.classList.remove("selecionada");

  // - passo 4 - marcar a aba clicada como selecionado
  aba.classList.add("selecionada");
}

function mostrarAbaInformacao(aba) {
  // - passo 5 - esconder o conteúdo anterior
  const informacaoSelecionada = document.querySelector(
    ".informacao.selecionada"
  );
  informacaoSelecionada.classList.remove("selecionada");

  // - passo 6 - mostrar o conteúdo da aba selecionada
  const idElementoAba = `informacao-${aba.id}`;

  const informacaoMostrada = document.getElementById(idElementoAba);
  informacaoMostrada.classList.add("selecionada");
}
