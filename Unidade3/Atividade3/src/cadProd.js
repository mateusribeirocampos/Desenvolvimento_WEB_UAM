function CadastrarProduto() {
    var nome_produto = document.getElementById("nome_produto").value;
    var descricao = document.getElementById("descricao").value;
    var preco = document.getElementById("preco").value;
    var fornecedor = document.getElementById("fornecedor").value;

    // Exibe um alerta contendo as informações coletadas do formulário
    alert("Nome do Produto: " + nome_produto + "\nDescrição: " + descricao + "\nPreço: " + preco + "\nFornecedor: " + fornecedor);

    var dadosajax = {
        'nome_produto': nome_produto,
        'descricao': descricao,
        'preco': preco,
        'fornecedor': fornecedor,
    };

    var pageurl = 'config.php';

    // Faz a requisição AJAX
    $.ajax({
        url: pageurl,
        data: dadosajax,
        type: 'POST',
        cache: false,
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('Erro na requisição: ', textStatus, errorThrown);
        },
        success: function(result) {
            alert("Produto Cadastrado com Sucesso!");
        }
    });
    return false;
}