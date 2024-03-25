<?php
// Database credentials
$servername = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'uamdb';
$conecta = mysqli_connect($servername, $username, $password, $dbname) or die('Erro de conexão: ' . mysqli_connect_error());

mysqli_select_db($conecta, $dbname);
$sql = "SELECT * FROM cliente";
$query = mysqli_query($conecta, $sql);

$clientes = array();
while ($row = mysqli_fetch_assoc($query)) {
    $clientes[] = $row;
}

echo json_encode($clientes);

mysqli_close($conecta);
