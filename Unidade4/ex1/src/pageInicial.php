<?php

$servername = '127.0.0.1'/
$username = 'root';
$password = '';
$dbname = 'login';


$login=$_POST['login'];
$senha=$_POST['senha'];

$conexao = mysqli_connect($servername, $username, $password, $dbname) 
or die('Erro de conexão: ' . mysqli_connect_error());

$selecionabd = mysqli_select_db($conexao, $dbname) 
or die('Erro ao selecionar o banco de dados: ' . mysqli_error($conexao));

$sql = 'SELECT * FROM usuarios WHERE login = "'.$login.'" AND senha = "'.$senha.'"';
$resultado = mysqli_query($conexao, $sql)
or die ('Erro na seleção da tabela');

if(mysqli_num_rows($resultado) > 0) {
    // sessão iniciada
    session_start();
    $_SESSION['login'] = $login;
    $_SESSION['senha'] = $senha;
} else {
    session_destroy();

    unset($_SESSION['login']);
    unset($_SESSION['senha']);
}
