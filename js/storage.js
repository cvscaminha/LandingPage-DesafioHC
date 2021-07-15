const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };

  if (
    document.getElementById("email").value === localStorage.getItem("email")
  ) {
    alert("Esse e-mail já está cadastrado!!");
  } else {
    // Cria um json a partir do objeto data
    let convertData = JSON.stringify(data);

    // "Seta" este json no localStorage
    localStorage.setItem("key", convertData);

    // Insere os elementos no localstorage
    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);

    alert("Cadastro realizado com sucesso!!");
  }
});
