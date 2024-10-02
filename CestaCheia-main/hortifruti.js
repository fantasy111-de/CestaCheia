document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão de alternância da barra lateral e a barra lateral
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    // Alterna a classe 'active' na barra lateral quando o botão é clicado
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Seleciona todos os botões dentro de '.nav-item'
    const buttons = document.querySelectorAll('.nav-item button');

    // Itera sobre cada botão e adiciona um event listener para o clique
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');
        });
    });
});
