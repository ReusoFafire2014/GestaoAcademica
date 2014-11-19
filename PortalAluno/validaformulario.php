  <!DOCTYPE html>
  <html>
  <meta charset="UTF-8">   
  <header>
    <title>Cadastro de Usuário</title>
     <link href="css/master.css" rel="stylesheet" media="screen">
     <script src="js/scripts.js" language="javascript"></script>
  <?php
  session_start();
  $Usuario = $_POST['txtUsuario'];
  $Senha = $_POST['txtSenha'];
  $Nome = $_POST['txtNome'];
  $Sexo = $_POST['txtSexo'];
  $Nasc = $_POST['txtAno'] . "-" . $_POST['txtMes'] . "-" . $_POST['txtDia'];
  $telRes = $_POST['txtResidencial'];
  $telCel = $_POST['txtCelular'];
  $Email = $_POST['txtEmail'];
  $Sal = $_POST['txtSalario'];
  $Tipo = $_POST['txtTipo'];
  /*
  echo "<p>$Usuario</p>";
  echo "<p>$Senha</p>";
  echo "<p>$Nome</p>";
  echo "<p>$Email</p>";
  echo "<p>$Sexo</p>";
  echo "<p>$Nasc</p>";
  echo "<p>$telRes</p>";
  echo "<p>$telCel</p>";
  echo "<p>$Sal</p>";
  */
  include "conexao.php";
  
  $Sql = "SELECT codcli FROM senhas WHERE usuariosenha = '$Usuario'";
  
  $Resultado = mysql_query($Sql);
  
  $contReg = mysql_num_rows($Resultado);
  
  if ($contReg == 0){
    
    $varErro = "N";
    
    $Sql = "INSERT INTO clientes (nomecli, sexocli, nascimentocli, salariocli) VALUES ('$Nome', '$Sexo', '$Nasc', $Sal )";
    
    $Resultado = mysql_query($Sql);
    
    $Sql = "INSERT INTO email (codcli, enderecoemail) VALUES (LAST_INSERT_ID(), '$Email')";
    
    $Resultado = mysql_query($Sql);
    
    $Sql = "INSERT INTO fone (codcli, numerofone, tipofone) VALUES (LAST_INSERT_ID(), '$telRes', 'R')";
    
    $Resultado = mysql_query($Sql);
    
    $Sql = "INSERT INTO fone (codcli, numerofone, tipofone) VALUES (LAST_INSERT_ID(), '$telCel', 'C')";
    
    $Resultado = mysql_query($Sql);
    
    $Sql = "INSERT INTO senhas (codcli, usuariosenha, senha, tiposenha) VALUES (LAST_INSERT_ID(), '$Usuario', '$Senha', '$Tipo')";
    
    $Resultado = mysql_query($Sql);
    
    $Sql = "SELECT codcli FROM senhas WHERE usuariosenha = '$Usuario'";
    
    $Resultado = mysql_query($Sql);
    
    $Registro = mysql_fetch_array($Resultado);
      
    $Codigo = $Registro['codcli'];
    
    //configuração para envio do email
    $emailSite = "prof.sidney.inacio@gmail.com";
      
    $Mensagem = "<h3>Parabens $Nome !</h3>";
    $Mensagem .= "<p>Seu cadastro foi efeuado com  sucesso. clique no link abaixo para confirmar  seu cadastro.</p>";
    //Configuração local
    /*
    $Mensagem .= "<p><a href='http://localhost/php/conf_cadastro.php?Codigo=$Codigo'>Clique aqui para confirmar seu cadastro</a></p>";
    */
    // Configuração servidor
    $Mensagem .= "<p><a href='http://ninfpe.6te.net/conf_cadastro.php?Codigo=" . $Codigo . "'>Clique aqui para confirmar seu cadastro</a></p>";
    
    $Headers = "MIME-Version: 1.1 \r\n";
    $Headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $Headers .= "From: $emailSite \r\n"; // Endereço de resposta
    $Headers .= "Return-Path: $emailSite \r\n"; // Deve ser igual ao From
      
    $Titulo = "ScriptWeb - Confirmação de Cadastro";
      
    $erroEmail = mail($Email, $Titulo , $Mensagem, $Headers);
    
    if ($erroEmail == false){
      $varErro = "S";
      $msgErro = '<h2 align="center">Erro no envio do Email!</h2>';
    }
    
  }else{
    $varErro = "S";
    $msgErro = '<h2 align="center">Usuário já cadastrado</h2>';
  }
?>
  </header>
  	<body>
      <div id="Recipiente">
          <center> <br/>
            <br/>
              <h2><b>Cadastro de Usuário</b></h2>
            <br/>
          </center>
        <br/>        
        <div class="div_conteudo">
        <div id="div_filho">
          
        </div> 
        </div>
        <br> 
      </div>         
  	</body>
  </html>