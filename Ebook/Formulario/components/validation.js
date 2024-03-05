// Função para validar e formatar o número de telefone
function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos do valor de entrada
    var numero = input.value.replace(/\D/g, '');

    // Verifica se o número de telefone tem o comprimento mínimo esperado
    if (numero.length < 10) { // 10 é o comprimento mínimo para um número de telefone
        // Se o comprimento for menor que 10, exibe uma mensagem de erro para o usuário
        document.getElementById("telefoneError").style.display = "block"; // Exibe a mensagem de erro
        input.focus(); // Retorna o foco para o campo de telefone
        return; // Retorna sem formatar o número
    }
    
    // Esconde a mensagem de erro se o número de telefone for válido
    document.getElementById("telefoneError").style.display = "none";

    // Continua com a formatação do número de telefone de acordo com o padrão desejado
    var formatado;
    if (numero.length === 11) { // Formato para celular: (XX) XXXXX-XXXX
        formatado = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 7) + '-' + numero.substring(7, 11);
    } else { // Formato para telefone fixo: (XX) XXXX-XXXX
        formatado = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 6) + '-' + numero.substring(6, 10);
    }

    // Atualiza o valor do campo de entrada com a versão formatada do número
    input.value = formatado;
}

// Seleciona o campo de telefone
var telefoneInput = document.getElementById('telefone');

// Adiciona um ouvinte de eventos para o evento de blur (perda de foco)
telefoneInput.addEventListener('blur', function() {
    formatarTelefone(telefoneInput);
});
