// SenhaAlterada.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const returnButton = document.querySelector(".rectangle");

    // Função para abrir a barra lateral
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    }

    // Função para fechar a barra lateral
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }

    // Evento de clique no botão de alternância da barra lateral
    sidebarToggle.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Evento de clique no overlay para fechar a barra lateral
    overlay.addEventListener('click', closeSidebar);

    // Função para lidar com a busca (para fins de demonstração)
    function handleSearch(event) {
        event.preventDefault();
        const query = searchInput.value;
        console.log('Buscando por:', query);
        // Adicione a lógica de busca aqui
    }

    // Evento de clique no ícone de busca
    searchIcon.addEventListener('click', handleSearch);

    // Evento de pressionar Enter na barra de pesquisa
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    });

    // Gerenciamento do estado ativo do link da barra lateral
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(otherLink => otherLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Evento de clique no botão 'Retornar ao Menu'
    if (returnButton) {
        returnButton.addEventListener("click", () => {
            // Redireciona para a página de login
            window.location.href = 'menuinicial.html';
        });
    }
});
