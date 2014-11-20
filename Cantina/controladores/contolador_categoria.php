<?php  
  include "../ConexaoBD/conexaoBDMySql.php";
  
  function getCategorias(){
    $conexao = abrir_conexao_banco();
    $result = query("select ctp_codigo, ctp_descricao from tbl_categoria_produto_ctp",$conexao);
    $categorias = Array();
    if ($cont = quantidade_registros_query($result) > 0 ){
      while ($linha = get_fetch_array($result)) {
        $categorias[] = Array(
            "ctp_codigo" => utf8_encode($linha["ctp_codigo"]),
            "ctp_descricao" => utf8_encode($linha["ctp_descricao"])
          );
      }
      echo json_encode($categorias);
    }    
  }
  
?>