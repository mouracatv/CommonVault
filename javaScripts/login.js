// --------------------------------------------------------
// PEGAR O FORMULÁRIO

const formulario = document.querySelector("#formLogin");

const login = document.querySelector("#login");
const senha = document.querySelector("#senha");
const confirma = document.querySelector("#confirma");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(login.value, senha.value, confirma.checked)
});

// --------------------------------------------------------
// TROCA DA SENHA DE VER E OCULTAR

const botaoSenha = document.querySelector("#botaoSenha");

botaoSenha.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        botaoSenha.textContent = "Ocultar";
    } else {
        senha.type = "password";
        botaoSenha.textContent = "Ver";
    }
});