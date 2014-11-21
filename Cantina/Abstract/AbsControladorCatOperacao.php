<?php
header('Content-Type: application/json');
include "../controladores/contolador_operacao_categoria.php";

$json = "";
$codigo = "";
$descricao = "";

if (isset($_POST['json'])) {

    $json = $_POST['json'];
}
if (isset($json['CODIGO']) && trim($json['CODIGO']) != "") {

    $codigo = $json['CODIGO'];
}
if (isset($json['DESCRICAO']) && trim($json['DESCRICAO']) != "") {

    $descricao = $json['DESCRICAO'];
}

if ($descricao == "") {
	$result = excluir_categoria($codigo);      	
} else{
    $result = salvar_categoria($codigo,$descricao);
}
?>