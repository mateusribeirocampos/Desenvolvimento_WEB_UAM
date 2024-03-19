<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "Admin123#";
$dbname = "uamdb";
$conecta = mysqli_connect($servername, $username, $password, $dbname); // Corrigindo a função mysqli_connect()

// Verifica se a conexão foi bem-sucedida
if (!$conecta) {
    die("Erro de conexão: " . mysqli_connect_error());
}

// Captura os valores do formulário
$nome = $_REQUEST["nome"];
$endereco = $_REQUEST["endereco"];
$idade = $_REQUEST["idade"];
$sexo = $_REQUEST["sexo"];

// Query SQL para inserir os dados na tabela cliente
$sql = "INSERT INTO cliente (nome, endereco, idade, sexo) VALUES ('$nome', '$endereco', '$idade', '$sexo')";

// Executa a query
if (mysqli_query($conecta, $sql)) {
    echo "Registro inserido com sucesso.";
} else {
    echo "Erro ao inserir registro: " . mysqli_error($conecta);
}

// Fecha a conexão
mysqli_close($conecta);

