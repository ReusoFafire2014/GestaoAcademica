  <!DOCTYPE html>
  <html>
  <meta charset="UTF-8">   
  <header>
    <title>Cadastro de Usuário</title>
     <link href="css/master.css" rel="stylesheet" media="screen">
     <script src="scripts.js" language="javascript"></script>

  <?
  //PEGA OS DADOS ENVIADOS PELO FORMULÁRIO
  $nomAluno = $_POST["nomAluno"];
  $matAluno = $_POST["matAluno"];
  $email = $_POST["email"];
  $senAluno = $_POST["senAluno"];
  
  //PREPARA O CONTEÚDO A SER GRAVADO
  $conteudo = "$nomAluno,$matAluno,$email,$senAluno\r\n";
  
  //ARQUIVO TXT
  $arquivo  = "dados_salvos.txt";
  
  //TENTA ABRIR O ARQUIVO TXT
  if (!$abrir = fopen($arquivo, "a")) {
     echo  "Erro abrindo arquivo ($arquivo)";
     exit;
  }
  
  //ESCREVE NO ARQUIVO TXT
  if (!fwrite($abrir, $conteudo)) {
    print "Erro escrevendo no arquivo ($arquivo)";
    exit;
  }
  
  echo "Arquivo gravado com Sucesso !!";
  
  //FECHA O ARQUIVO 
  fclose($abrir);
?>

</header>
    <body>
      <div id="Recipiente">
          <center> <br/>
            <br/>
              <h2><b>Confirmação de Cadastro de Usuário</b></h2>
            <br/>
          </center>
        <br/>        
        <div class="div_conteudo">
        <div id="div_filho">

           <?php
              $nomAluno = $_POST['nomAluno'];
              $matAluno = $_POST['matAluno'];
              $email = $_POST['email'];
              $senAluno = $_POST['senAluno'];

              $handle = fopen ("dados_salvos.txt", "w");
              $conteudo = "$nomAluno,$matAluno,$email,$senAluno\r\n";
              fwrite($handle, $conteudo);
              {
              echo "Arquivo Salvo corretamente. <br/>";
              echo "<br/>Clique <a href='index.html'>aqui</a> e volte a pagina de edição<p></p>";
              }
              fclose($handle);
            ?>

          </div> 
        </div>
        <br> 
      </div>         
    </body>
  </html>