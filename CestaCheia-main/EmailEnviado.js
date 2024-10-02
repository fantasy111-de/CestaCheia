document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const codeInput = document.getElementById("code");
    const codeError = document.getElementById("codeError");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        if (validateCode()) { // Verifica se o código é válido
            document.body.classList.add('fade-out'); // Adiciona a classe de fade-out ao corpo da página

            // Aguarda um breve período antes de redirecionar para a nova página
            setTimeout(() => {
                window.location.href = 'AlterarSenha.html';
            }, 500); // Tempo de espera para a transição (em milissegundos)
        }
    });

    function validateCode() {
        const code = codeInput.value.trim(); // Obtém o valor do input e remove espaços em branco extras
        if (code.length !== 6) {
            codeError.textContent = "O código deve ter exatamente 6 caracteres."; // Mensagem de erro
            return false; // Retorna falso se a validação falhar
        } else {
            codeError.textContent = ""; // Limpa o texto de erro se a validação for bem-sucedida
            return true; // Retorna verdadeiro se a validação passar
        }
    }
});
