function Consultar() {
    var nome_cliente = document.getElementById("nomeCliente").value;
    var dadosajax = {
        'nome_cliente': nome_cliente
    };
    var pageurl = 'consultap.php';
    $.ajax({
        url: pageurl,
        type: 'GET',
        data: dadosajax,
        cache: false,
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Erro ao consultar cliente!");
        },
        success: function(result) {
            var cliente = JSON.parse(result)[0]; 
            if (cliente) {
                document.getElementById("endereco").value = cliente.endereco;
                document.getElementById("idade").value = cliente.idade;
                var sexoRadio = document.querySelector('input[name="sexo"]:checked');
                if (sexoRadio) {
                    sexoRadio.checked = false;
                }
                var radioSexo = document.getElementById(cliente.sexo.toLowerCase());
                if (radioSexo) {
                    radioSexo.checked = true;
                }
            } else {
                alert("Cliente não encontrado!");
            }
        }
    });
}

$(document).ready(function() {
    $('#btnConsultar').click(function() {
        Consultar();
    });
});