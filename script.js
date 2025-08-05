document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  const aumentarFonte = document.getElementById('aumentar-fonte');
  const diminuirFonte = document.getElementById('diminuir-fonte');
  const body = document.body;

  let tamanhoFonte = 16;

  aumentarFonte.addEventListener('click', () => {
    if (tamanhoFonte < 24) {
      tamanhoFonte += 2;
      body.style.fontSize = `${tamanhoFonte}px`;
    }
  });

  diminuirFonte.addEventListener('click', () => {
    if (tamanhoFonte > 10) {
      tamanhoFonte -= 2;
      body.style.fontSize = `${tamanhoFonte}px`;
    }
  });
});
