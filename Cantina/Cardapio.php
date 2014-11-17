<html>
<head>
  <meta charset = "UTF-8">
  <title>Cardápio</title>
  <link href="dist/css/bootstrap.min.css" rel="stylesheet"> 
  <link href="dist/css/bootstrap.css" rel="bootstrap">
  <link href="dist/css/bootstrap-theme.css" rel="bootstrap-theme">
  <link rel="stylesheet" href="dist/css/justified-nav.css">

  <script src="dist/js/bootstrap.js"></script>  
  <script src="dist/js/bootstrap.min.js"></script>  
  <script src="dist/js/npm.js"></script>    
  <link rel="icon" href="favicon.ico">
</head>
<body>  
    <div class="container">
      <!-- Menu principal -->
      <div class="masthead">
        <h1>Cantina da Universidade Koala</h1> <!--<img src="dist/img/Koala.jpg">-->
        <div role="navigation">
          <ul class="nav nav-justified">
            <li><a href="MenuPrincipal.php">Home</a></li>
            <li><a href="CadastroProduto.php">Produtos</a></li>
            <li><a href="ListarCategoria.php">Categorias de produtos</a></li>
            <li class="active"><a href="Cardapio.php">Cardápio</a></li>
            <li><a href="ControleVendas.php">Vendas</a></li>          
          </ul>
        </div>
      </div>        
  
 <!-- Example row of columns -->
      <div class="row">
        <h2 class="sub-header">Cardápio</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Lanches</th>
                  <th>Preço</th>
                  <th>Bebidas</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sopas</td>
                  <td>R$ 5,00</td>
                  <td>Suco de Frutas</td>
                  <td>R$ 4,50</td>
                </tr>
                <tr>
                  <td>Sanduíche de queijo</td>
                  <td>R$ 3,50</td>
                  <td>Suco de polpa</td>
                  <td>R$ 4,00</td>
                </tr>
                <tr>
                  <td>Sanduíche misto</td>
                  <td>R$ 4,00</td>
                  <td>Refrigerante</td>
                  <td>R$ 3,50</td>
                </tr>
                <tr>
                  <td>Hamburguer</td>
                  <td>R$ 5,50</td>
                  <td>Água com gás</td>
                  <td>R$ 2,50</td>
                </tr>
                <tr>
                  <td>X-Burguer</td>
                  <td>R$ 6,00</td>
                  <td>Água sem gás</td>
                  <td>R$ 2,00</td>
                </tr>
                <tr>
                  <td>Beirute</td>
                  <td>R$ 6,00</td>
                  <td>Milkshake</td>
                  <td>R$ 6,00</td>
                </tr>
                <tr>
                  <td>Pizza</td>
                  <td>R$ 4,00</td>
                  <td>Aqualirus</td>
                  <td>R$ 4,50</td>
                </tr>
                <tr>
                  <td>Batata frita</td>
                  <td>R$ 2,00</td>
                  <td>Café</td>
                  <td>R$ 2,00</td>
                </tr>                        
              </tbody>
            </table>
          </div>
  </div> <!-- /container -->
</body>
</html>