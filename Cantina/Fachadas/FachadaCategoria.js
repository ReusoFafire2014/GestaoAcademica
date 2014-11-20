function CategoriaCtrl($scope, $http) {
  var
    $ = jQuery,
    ng = $scope;


    ng.ListaCategoria = [];

    ng.getCategorias = function(){      

      $http.get('Abstract/AbsControlador.php').success(function(data){
          ng.ListaCategoria = data;
          console.log(ng.ListaCategoria);
      });
    };

    ng.getCategorias();
}

function FetchController($scope, $http){
  var
    $ = jQuery,
    ng = $scope;


    ng.ListaCategoria = [];

    ng.getCategorias = function(){      

      $http.post('Abstract/AbsControlador.php').success(function(data){
          ng.ListaCategoria = data;
          console.log(ng.ListaCategoria);
      });
    };

    ng.getCategorias();  
}