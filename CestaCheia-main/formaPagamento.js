let selectedPaymentMethod = '';

function selectPayment(method) {
    const pixButton = document.getElementById('pix-button');
    const cardButton = document.getElementById('card-button');
    const proceedContainer = document.getElementById('proceed-container');

    // Reset selected state
    pixButton.classList.remove('selected');
    cardButton.classList.remove('selected');

    // Set selected state
    if (method === 'pix') {
        pixButton.classList.add('selected');
    } else if (method === 'cartao') {
        cardButton.classList.add('selected');
    }

    // Show proceed button
    proceedContainer.classList.remove('hidden');

    // Set selected payment method
    selectedPaymentMethod = method;
}

function proceedPayment() {
    if (selectedPaymentMethod === 'pix') {
        window.location.href = 'pagamentoPix.html';
    } else if (selectedPaymentMethod === 'cartao') {
        window.location.href = 'pagamentoCartao.html';
    }
}

// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
