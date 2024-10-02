document.addEventListener('DOMContentLoaded', function() {
    // Toggle do sidebar
    document.getElementById('sidebarToggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
    });

    // Fechar o sidebar ao clicar no overlay
    document.getElementById('overlay').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    // Validação do formulário de pagamento
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Simulação de validação dos campos do cartão
        let cardNumber = document.getElementById('card-number').value;
        let expiryDate = document.getElementById('expiry-date').value;
        let cvv = document.getElementById('cvv').value;

        if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
            alert('Por favor, preencha todos os campos do cartão.');
            return;
        }

        // Verificação de seleção de forma de pagamento parcelado
        let selectedParcelamento = false;
        let parcelamentoCards = document.querySelectorAll('.formas-parcelamento');
        parcelamentoCards.forEach(card => {
            if (card.classList.contains('selected')) {
                selectedParcelamento = true;
            }
        });

        if (!selectedParcelamento) {
            alert('Selecione uma forma de pagamento parcelado.');
            return;
        }

        // Se passou pela validação, simular o redirecionamento
        window.location.href = 'CompraRealizada.html';
    });

    // Adicionar evento de clique para os cards de parcelamento
    let parcelamentoCards = document.querySelectorAll('.formas-parcelamento');
    parcelamentoCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remover a classe 'selected' de todos os cards de parcelamento
            parcelamentoCards.forEach(c => c.classList.remove('selected'));
            // Adicionar a classe 'selected' ao card clicado
            this.classList.add('selected');
        });
    });
});
