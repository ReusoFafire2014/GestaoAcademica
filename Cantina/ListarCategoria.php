<html>
<head>
	<meta charset = "UTF-8">

	<title>Lista de Categorias</title>

	<link href="dist/css/bootstrap.min.css" rel="stylesheet">  
  <link href="dist/css/bootstrap.css" rel="bootstrap">
  <link href="dist/css/bootstrap-theme.css" rel="bootstrap-theme">
  <link rel="stylesheet" href="dist/css/justified-nav.css">
  <link rel="stylesheet" href="dist/css/estilo.css">

  <script src="dist/js/bootstrap.js"></script>  
  <script src="dist/js/bootstrap.min.js"></script>  
  <script src="dist/js/npm.js"></script>    
  <link rel="icon" href="favicon.ico">
</head>
<body>  
  <div class="container">
    <!-- Menu principal -->
      <div class="masthead">
        <h1>Cantina da Universidade Koala</h1>
        <div role="navigation">
          <ul class="nav nav-justified">            
            <li><a href="MenuPrincipal.php">Home</a></li>
            <li><a href="CadastroProduto.php">Produtos</a></li>
            <li class="active"><a href="ListarCategoria.php">Categorias de produtos</a></li>
            <li><a href="Cardapio.php">Cardápio</a></li>
            <li><a href="ControleVendas.php">Vendas</a></li>          
          </ul>
        </div>
      </div>  
    
      <?php  
        include "ConexaoBD/conexaoBDMySql.php";

        $conexao = abrir_conexao_banco();
        $result = query("select ctp_codigo, ctp_descricao from tbl_categoria_produto_ctp",$conexao);

        if ($cont = quantidade_registros_query($result) > 0 ){
          $tabela =  "<div class='row'>
                        <h2 class='sub-header'>Categoria de Produtos</h2>
                        <button class='btn btn-lg btn-primary btn-block'><a href='CadastroCategoria.php'>Nova Categoria</a></button>
                        <div class='table-responsive'>
                          <table class='table table-striped'>
                            <thead>
                              <tr>
                                <th>Código</th>
                                <th>Descrição</th>                  
                              </tr>
                            </thead>
                          <tbody>
                            <tr>";
          $return = "$tabela";

          while($linha = get_fetch_array($result)){
            $return.= "<td>" . utf8_encode($linha["ctp_codigo"]) . "</td>"; 
            $return.= "<td>" . utf8_encode($linha["ctp_descricao"]) . "</td>"; 
            $return.= "<td><a href = 'CadastroCategoria.php'>" . "<img src='dist/img/A_Edit_Lg_N.png'>" . "</td>"; 
            $return.= "<td>" . "<img src='dist/img/iconeExcluir.gif'>" . "</td>";
            $return.= "</tr>";
          }
          echo $return.= "</tr>
                        </tbody>
                      </table>
                    </div>
                  </div>";
        } else{
          echo "Não existem categorias Cadastradas.";
        }

        libera_memoria_result($result);
        fechar_conexao_banco($conexao);
      ?>          

  </div> <!-- Container -->
</body>
</html>