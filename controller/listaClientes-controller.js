import { clienteService } from "../service/cliente-services.js";
const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `;
  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

tabela.addEventListener("click", (e) => {
  let botao = e.target.className === "botao-simples botao-simples--excluir";

  if (botao) {
    clienteService.removeClientes(id);
  }
});

clienteService.listaClientes().then((data) => {
  data.forEach((elemento) => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id)
    );
  });
});
