/*value: Em HTML, o atributo value é usado para especificar o valor associado a um elemento de formulário, como um campo de texto (<input type="text">), um campo de seleção (<select>) ou um botão (<button>). Quando você insere algum texto em um campo de texto ou seleciona uma opção em um menu suspenso, o valor desse campo é o que é enviado para o servidor quando o formulário é enviado. Em JavaScript, você pode acessar e modificar o valor de um elemento usando a propriedade value. Por exemplo, document.getElementById("nome").value retorna o valor do campo de texto com o ID "nome".

checked: O atributo checked é usado em elementos de formulário do tipo checkbox (<input type="checkbox">) e radio (<input type="radio">). Quando o atributo checked está presente em um elemento, significa que esse elemento está marcado ou selecionado. Em JavaScript, você pode verificar se um elemento de caixa de seleção ou rádio está marcado verificando a propriedade checked. Por exemplo, document.getElementById("masculino").checked retorna true se o botão de rádio com o ID "masculino" estiver marcado e false caso contrário. */
function Cadastro() {
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var idade = document.getElementById("idade").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;

    // Exibe um alerta contendo as informações coletadas do formulário
    alert("Nome: " + nome + "\nEndereço: " + endereco + "\nIdade: " + idade + "\nSexo: " + sexo);

    var dadosajax = {
        'nome': nome,
        'endereco': endereco,
        'idade': idade,
        'sexo': sexo
    };

    var pageurl = 'grava_cliente.php'; // Coloque a URL entre aspas simples

    // Faz a requisição AJAX
    $.ajax({
        url: pageurl, // Corrigindo o nome do parâmetro para 'url'
        data: dadosajax,
        type: 'POST',
        cache: false,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Erro Gravação Cliente: " + errorThrown);
        },
        success: function(result) {
            alert("Cliente Gravado com Sucesso!");
        }
    });

    // Retorna false para cancelar o envio do formulário (opcional)
    return false;
}
