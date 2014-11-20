<?php  
  function salvar_produto($cod_produto,$desc_produto){  	
    $sql = "";
  }

  $acao =  $_GET["acao"];

  if ($acao == "cadastrar"){
  	$cod_produto = $_POST["cod_produto"];
  	$desc_produto = $_POST["desc_produto"];

  	salvar_produto($cod_produto,$desc_produto);  

  	header("location:http://www.google.com.br")   
  }
?>