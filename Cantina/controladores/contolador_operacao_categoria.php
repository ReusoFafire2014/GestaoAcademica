<<?php 
include "../ConexaoBD/conexaoBDMySql.php";

  function verifica_existe($cod_categoria){  
    $sql = "select ctp_codigo, ctp_descricao from tbl_categoria_produto_ctp where ctp_codigo = $cod_categoria";  
    $conexao = abrir_conexao_banco();    
    $result = query($sql,$conexao);        

    if (quantidade_registros_query($result) > 0){      
      return TRUE;
    }
    else{      
      return FALSE;
    }      

    fechar_conexao_banco($conexao);    
  }

  function salvar_categoria($cod_categoria,$desc_categoria){      
    if (verifica_existe($cod_categoria) == FALSE) {      
      $sql = "insert into tbl_categoria_produto_ctp(ctp_codigo, ctp_descricao) VALUES ($cod_categoria, '$desc_categoria')";      
    }
    else{    
      $sql = "update tbl_categoria_produto_ctp set ctp_descricao='$desc_categoria' where ctp_codigo=$cod_categoria";      
    }     
    $conexao = abre_conexao_manipulacao();
    
    aplicar_mudancas($conexao,$sql);     
  }

  $acao =  'cadastrar';//$_GET["acao"];

  if ($acao != "cadastrar"){
    $cod_categoria = $_POST["cod_categoria"];
    $desc_categoria = $_POST["desc_categoria"];

    salvar_categoria($cod_categoria,$desc_categoria);  

    // header("location:../ListarCategoria.php");    
  }

 ?>