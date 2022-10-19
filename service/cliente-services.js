const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

const criaClientes = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => resposta.body);
};

const removeClientes = (id) => {
  return fetch(`http://localhost:3000/${id}profile`, {
    method: "DELETE",
  });
};

export const clienteService = {
  listaClientes,
  criaClientes,
  removeClientes,
};
