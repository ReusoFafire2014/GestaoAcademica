<?php  

  function abrir_conexao_banco(){
    $conecta = mysql_connect("127.0.0.1", "root", "") or print (mysql_error()); 
    // Testando seleção no banco
    mysql_select_db("cantina_koala", $conecta) or print(mysql_error()); 
    return $conecta;    
  }

  function abre_conexao_manipulacao(){
    $conecta = mysqli_connect("127.0.0.1", "root", "","cantina_koala");  	
    return $conecta;
  }

  function fechar_conexao_banco($conecta){
  	mysql_close($conecta);
  }

  function libera_memoria_result($result){
    mysql_free_result($result);
  }

  function query($sql,$conecta){
    return mysql_query($sql,$conecta);
  }  

  function quantidade_registros_query($result){
  	return mysql_num_rows($result);
  }  

  function get_fetch_array($result){
    return mysql_fetch_array($result);	
  }

  function aplicar_mudancas($conecta,$sql){
  	// retorna === TRUE em caso de sucesso;
  	return $conecta->query($sql);
  }
?>