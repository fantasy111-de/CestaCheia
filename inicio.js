// JavaScript para redirecionamento de páginas com transição

// Função para redirecionar para a página de login com transição
function goToLogin() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 500); // Tempo de espera para a transição (em milissegundos)
}

// Função para redirecionar para a página de registro com transição
function goToRegister() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'register.html';
    }, 500); // Tempo de espera para a transição (em milissegundos)
}

// Contador de cliques na logo
let clickCount = 0;
function countClicks() {
    clickCount++;
    alert(`Você clicou na logo ${clickCount} vezes.`);
}
