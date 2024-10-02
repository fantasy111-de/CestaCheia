document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio imediato do formulário

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Limpar mensagem de erro
    emailError.textContent = '';

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Email inválido';
        return false;
    }

    // Adiciona a classe de fade-out ao corpo da página
    document.body.classList.add('fade-out');

    // Espera um curto período antes de redirecionar para a nova página
    setTimeout(() => {
        window.location.href = 'EmailEnviado.html';
    }, 500); // Tempo de espera para a transição (em milissegundos)

    return true;
});
