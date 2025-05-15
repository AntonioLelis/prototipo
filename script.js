// script.js - Interações e navegação do Quantum IA

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os formulários
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formId = form.parentElement.querySelector('h1').textContent;

            // Pega todos os campos do formulário
            const inputs = form.querySelectorAll('input, select, textarea');
            let formData = {};

            inputs.forEach(input => {
                formData[input.id] = input.value;
            });

            console.log(`Formulário de ${formId}:`, formData);

            // Exibe um alerta básico
            alert(`Formulário de ${formId} enviado com sucesso!`);

            // Limpa os campos
            form.reset();
        });
    });
});
