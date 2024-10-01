document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmpassword");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmpasswordError");
    const togglePasswordIcon1 = document.getElementById('togglePassword1');
    const togglePasswordIcon2 = document.getElementById('togglePassword2');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validatePassword();
    });

    togglePasswordIcon1.addEventListener('click', function() {
        togglePasswordVisibility(passwordInput, this);
    });
    togglePasswordIcon2.addEventListener('click', function() {
        togglePasswordVisibility(confirmPasswordInput, this);
    });

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        let valid = true;

        if (password.length < 6) {
            passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "As senhas não coincidem.";
            valid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        if (valid) {
            window.location.href = 'SenhaAlterada.html';
        }
    }

    function togglePasswordVisibility(inputField, iconElement) {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
        iconElement.classList.toggle('fa-eye-slash');

        // Adicionar/remover classe para estilo de senha visível
        inputField.classList.toggle('password-visible');
    }
});
