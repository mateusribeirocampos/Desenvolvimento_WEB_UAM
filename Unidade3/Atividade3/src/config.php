<?php

// credenciais do banco de dados
$servername = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'atividade3webuam';
$conecta = mysqli_connect($servername, $username, $password, $dbname);

//verifica se a conexão foi bem-sucedida
if (!$conecta) {
	die('Erro de conexão: ' . mysqli_connect_error());
}
// verfica se os dados do formulário foram enviados
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// obtém os dados do formulário
	$nome_produto = $_POST['nome_produto'];
	$descricao = $_POST['descricao'];
	$valor = $_POST['valor'];
	$fornecedor = $_POST['fornecedor'];

	// prepara a consulta SQL para inserir os dados
	$sql = "INSERT INTO produtos (nome_produto, descricao, valor, fornecedor) VALUES ('$nome_produto', '$descricao', '$valor', '$fornecedor')";

	// executa a consulta
	if (mysqli_query($conecta, $sql)) {
		echo 'Dados inseridos com sucesso';
	} else {
		echo 'Erro ao inserir dados: ' . mysqli_error($conecta);
	}
	return false;
}
