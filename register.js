document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let formValid = true; // Variável para controlar se o formulário é válido

    // Função para exibir mensagens de erro
    const showError = (id, message) => {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
        }
    };

    // Função para validar um campo genérico
    const validateField = (value, id, errorMessage, validationFunction = null) => {
        if (!value.trim()) {
            showError(id, errorMessage);
            formValid = false;
        } else if (validationFunction && !validationFunction(value)) {
            showError(id, errorMessage);
            formValid = false;
        } else {
            showError(id, ''); // Limpa mensagem de erro se válido
        }
    };

    // Limpar mensagens de erro antes de validar
    showError('nomeError', '');
    showError('emailError', '');
    showError('passwordError', '');

    // Validação do nome
    const nome = document.getElementById('nome').value;
    validateField(nome, 'nomeError', 'Nome é obrigatório');

    // Validação do email usando uma expressão regular básica
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    validateField(email, 'emailError', 'Email inválido', value => emailPattern.test(value));

    // Validação da senha - pelo menos 6 caracteres
    const senha = document.getElementById('senha').value;
    validateField(senha, 'passwordError', 'A senha deve ter pelo menos 6 caracteres', value => value.length >= 6);


    // Se o formulário for válido, adicionar a classe 'fade-out' ao body e redirecionar
    if (formValid) {
        document.body.classList.add('fade-out'); // Adiciona a classe de fade-out ao corpo da página

        // Aguarda um breve período antes de redirecionar para a nova página
        setTimeout(() => {
            window.location.href = 'menuinicial.html';
        }, 500); // Tempo de espera para a transição (em milissegundos)
    }
});

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('senha');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash'); // Alternância do ícone entre visível e oculto
}

// Event listener para o ícone de olho (mostrar senha)
document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);

