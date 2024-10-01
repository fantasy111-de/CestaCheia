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
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    // Evento de clique no overlay para fechar a barra lateral
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }

    // Função para lidar com a busca (para fins de demonstração)
    function handleSearch(event) {
        event.preventDefault();
        const query = searchInput.value;
        console.log('Buscando por:', query);
        // Adicione a lógica de busca aqui
    }

    // Evento de clique no ícone de busca
    if (searchIcon) {
        searchIcon.addEventListener('click', handleSearch);
    }

    // Evento de pressionar Enter na barra de pesquisa
    if (searchInput) {
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                handleSearch(event);
            }
        });
    }

    // Gerenciamento do estado ativo do link da barra lateral
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(otherLink => otherLink.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
});
