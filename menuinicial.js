document.addEventListener('DOMContentLoaded', (event) => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

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
        const searchInput = document.querySelector('.search-bar input[type="text"]');
        const query = searchInput.value;
        console.log('Buscando por:', query);
        // Adicione a lógica de busca aqui
    }

    // Evento de clique no ícone de busca
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', handleSearch);

    // Evento de pressionar Enter na barra de pesquisa
    const searchInput = document.querySelector('.search-bar input[type="text"]');
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

    // Mantém os ícones visíveis mesmo quando a barra lateral não está ativa
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const icon = item.querySelector('i');
        icon.style.visibility = 'visible';
    });
});
