<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "Admin123#";
$dbname = "uamdb";
$conecta = mysqli_connect($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if (!$conecta) {
    die("Erro de conexão: " . mysqli_connect_error());
}

// Query SQL para criar a tabela cliente
$sql = "CREATE TABLE IF NOT EXISTS cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    sexo ENUM('Masculino', 'Feminino') NOT NULL
)";

// Executa a query
if (mysqli_query($conecta, $sql)) {
    echo "Tabela criada com sucesso.";
} else {
    echo "Erro ao criar tabela: " . mysqli_error($conecta);
}

// Fecha a conexão
mysqli_close($conecta);

