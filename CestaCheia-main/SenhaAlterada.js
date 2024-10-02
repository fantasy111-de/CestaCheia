// SenhaAlterada.js

// Aguarda até que o conteúdo da página esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão com a classe 'rectangle' e adiciona um evento de clique
    var returnButton = document.querySelector(".rectangle");

    // Verifica se o botão foi encontrado
    if (returnButton) {
        // Adiciona um ouvinte de evento de clique ao botão
        returnButton.addEventListener("click", function() {
            // Redireciona para a página de login
            window.location.href = 'login.html';
        });
    }
});
