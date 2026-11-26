// --------------------------------------------------------
// PEGAR O FORMULÁRIO

const formulario = document.querySelector("#formSenhaEsquecida");

const login = document.querySelector("#login");
const confirma = document.querySelector("#confirma");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(login.value, confirma.checked)
});