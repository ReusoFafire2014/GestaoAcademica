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

    ng.ConfirmaExclusao = function(cod) {

        ng.codexclusao = cod;
        $("#confirmacao").modal('show');
    }; 

    ng.Limpar = function()
    {
        ng.edtcodigo = "";
        ng.edtdescricao = "";
        $('#requerido').hide();
    };

    ng.Editar = function(cod, desc) {
        ng.edtcodigo = cod;
        ng.edtdescricao = desc;
        $("#cadastro").modal('show');
    };

    ng.Excluir = function(cod) {

        var dados = {"CODIGO": cod,
            "DESCRICAO": ""};             

        $.post("Abstract/AbsControladorCatOperacao.php", {json: dados}).success(function() {

            ng.getCategorias();
            ng.Limpar();
            $("#confirmacao").modal('hide');
        });
    };       

    ng.Salvar = function() {

        var dados = {"CODIGO": ng.edtcodigo,
            "DESCRICAO": ng.edtdescricao};

        $("#requerido").hide();

        if (!ng.edtcodigo)
        {
            $("#requerido").show();
            $("#requerido").html("<strong>Preencha o campo CÓDIGO.</strong>");
        }
        if (!ng.edtdescricao)
        {
            $("#requerido").show();
            $("#requerido").html("<strong>Preencha o campo Descrição.</strong>");
        }
        else
        {                    
            $.post("Abstract/AbsControladorCatOperacao.php", {json: dados}).success(function() {

                $("#cadastro").modal('hide');
                $("#infocadastro").show(400);
                $("#infocadastro").html("<strong>Informação. </strong> Dados salvos com sucesso.");
                $(document).ready(function() {
                    setTimeout("$('#infocadastro').hide();", 2000);
                });
                
                ng.getCategorias();
                ng.Limpar();
            });
        }

    };

    ng.getCategorias();
}