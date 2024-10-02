document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePasswordIcon = document.querySelector('.password-container i');

    form.addEventListener('submit', handleSubmitForm);
    togglePasswordIcon.addEventListener('click', togglePasswordVisibility);

    function handleSubmitForm(event) {
        event.preventDefault();
        let isValid = true;

        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Email validation
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'O email é obrigatório.';
            isValid = false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = 'Por favor, insira um email válido.';
            isValid = false;
        }

        // Password validation
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            passwordError.textContent = 'A senha é obrigatória.';
            isValid = false;
        }

        if (isValid) {
            // Adiciona a classe de fade-out ao corpo da página
            document.body.classList.add('fade-out');

            // Espera um curto período antes de redirecionar para a nova página
            setTimeout(() => {
                window.location.href = 'menuinicial.html';
            }, 500); // Tempo de espera para a transição (em milissegundos)
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function togglePasswordVisibility() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    }
});
