$(document).ready(function() {
    $('#btnListar').click(function() {
        Listar();
    });
});

function Listar() {
    var pageurl = 'listar_cliente.php';
    $.ajax({
        url: pageurl,
        type: 'GET',
        cache: false,
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Erro ao listar clientes!");
        },
        success: function(result) {
            var clientes = JSON.parse(result);
            var tabela = document.getElementById("tabelaClientes");
            var linhas = tabela.getElementsByTagName("tr");

            // Limpar linhas existentes (exceto o cabeçalho)
            for (var i = linhas.length - 1; i > 0; i--) {
                tabela.removeChild(linhas[i]);
            }

            // Preencher linhas com os dados dos clientes
            for (var i = 0; i < clientes.length; i++) {
                var linha = tabela.insertRow(-1);
                var celulaNome = linha.insertCell(0);
                var celulaEndereco = linha.insertCell(1);
                var celulaIdade = linha.insertCell(2);
                var celulaSexo = linha.insertCell(3);

                celulaNome.innerHTML = clientes[i].nome;
                celulaEndereco.innerHTML = clientes[i].endereco;
                celulaIdade.innerHTML = clientes[i].idade;
                celulaSexo.innerHTML = clientes[i].sexo;
            }
        }
    });
}