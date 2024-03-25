<?php

// Database credentials
$servername = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'uamdb';
$conecta = mysqli_connect($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if (!$conecta) {
	die('Erro de conexão: ' . mysqli_connect_error());
}

// Verifica se os dados do formulário foram enviados
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// Obtém os dados do formulário
	$nome = $_POST['nome'];
	$endereco = $_POST['endereco'];
	$idade = $_POST['idade'];
	$sexo = $_POST['sexo'];

	// Prepara a consulta SQL para inserir os dados
	$sql = "INSERT INTO cliente (nome, endereco, idade, sexo) VALUES ('$nome', '$endereco', $idade, '$sexo')";

	// Executa a consulta
	if (mysqli_query($conecta, $sql)) {
		echo 'Dados inseridos com sucesso';
	} else {
		echo 'Erro ao inserir dados: ' . mysqli_error($conecta);
	}
    return false;
}

// Query SQL para criar a tabela cliente
//$sql = "CREATE TABLE IF NOT EXISTS cliente (
//    id INT AUTO_INCREMENT PRIMARY KEY,
//    nome VARCHAR(255) NOT NULL,
//    endereco VARCHAR(255) NOT NULL,
//    idade INT NOT NULL,
//    sexo ENUM('Masculino', 'Feminino') NOT NULL
//)";

// Executa a query
//if (mysqli_query($conecta, $sql)) {
//	echo 'Tabela criada com sucesso.';
//} else {
//	echo 'Erro ao criar tabela: ' . mysqli_error($conecta);
//}

// Fecha a conexão
mysqli_close($conecta);