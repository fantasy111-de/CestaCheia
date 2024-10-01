document.addEventListener('DOMContentLoaded', function() {
    // Toggle do sidebar
    document.getElementById('sidebarToggle').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
    });

    // Fechar o sidebar ao clicar no overlay
    document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

});