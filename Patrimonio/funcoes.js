$(function(){

	var operacao, //"A"=Adição; "E"=Edição
	indice_selecionado; 

	// Preenche os valores dos campos na tela de alterar
	if($("body").hasClass("alterar")){
		operacao = "E";
		// Obtém o valor da variável da URL ()
		function obterVariavelURL(variavel){
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variavel){return pair[1];}
			}
			return(false);
		}

		$("#patri_descricao").val(obterVariavelURL("Descricao")).focus();
		$("#patri_marca").val(obterVariavelURL("Marca"));
		$("#patri_plaqueta").val(obterVariavelURL("Plaqueta"));
		if(obterVariavelURL("Situacao") == "Ativo") $("#patri_situacao option[name=ativo]").attr("selected", "selected");
		else $("#patri_situacao option[name=inativo]").attr("selected", "selected");
		$("#patri_fornecedor").val(obterVariavelURL("Fornecedor"));
		$("#patri_dataCompra").val(obterVariavelURL("DataCompra"));
		indice_selecionado = parseInt(obterVariavelURL("indice_selecionado"));
	}
	else {
		operacao = "A";
		indice_selecionado = -1;
	}
	
	
	var linkPathArray = window.location.pathname.split( '/' );
	var linkSecondLevelLocation = linkPathArray[1];
	var linkHome = window.location.protocol + "//" + window.location.host + "/" + linkPathArray[1];
	var linkModulo = window.location.protocol + "//" + window.location.host + "/" + linkPathArray[1] + "/"+ linkPathArray[2];

	// Copia os dados armazenados no Local Storage no formato string.
	var tbPatrimonio = localStorage.getItem("tbPatrimonio");

	// Converte a cópia dos dados de string para o formato JSON.
	tbPatrimonio = JSON.parse(tbPatrimonio); 

	if(tbPatrimonio == null) tbPatrimonio = []; // Caso não haja conteúdo no Local Storage, iniciamos um JSON vazio.


	//Método adicionar
	function Adicionar(){
		if(checarValorExistente("Plaqueta", $("#patri_plaqueta").val()) != null){
			alert("Plaqueta já cadastrada.");
			return;
		}

		// Obtem os valores informados nos campos e converte para o formato JSON
		var patrimonio = JSON.stringify({ 
			Descricao	 : $("#patri_descricao").val(),
			Marca		 : $("#patri_marca").val(),
			Plaqueta	: $("#patri_plaqueta").val(),
			Situacao	: $("#patri_situacao").val(),
			Fornecedor	: $("#patri_fornecedor").val(),	
			DataCompra	: $("#patri_dataCompra").val()
		});

		 // Adiciona o JSON criado acima à cópia dos dados
		tbPatrimonio.push(patrimonio);

		// Redefine o localStorage com a cópia dos dados
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));

		return true;
	}

	// Altera o registro selecionado
	function Editar(){
		tbPatrimonio[indice_selecionado] = JSON.stringify({
			Descricao	 : $("#patri_descricao").val(),
			Marca		 : $("#patri_marca").val(),
			Plaqueta	: $("#patri_plaqueta").val(),
			Situacao	: $("#patri_situacao").val(),
			Fornecedor	: $("#patri_fornecedor").val(),	
			DataCompra	: $("#patri_dataCompra").val()
			});
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
		operacao = "A";
		window.location.replace(linkModulo + "/consulta.html");
		return false;
	}

	function Cancelar(){
		operacao = "A";
		window.location.replace(linkModulo + "/consulta.html");
		return false;
	}

	// Monta a tabela de listagem com os dados do Local Storage
	function Listar(){
		$("#patrimonio").html("");
		$("#patrimonio").html(
			"<thead>"+
			"	<tr>"+
				"	<th></th>"+
				"	<th>Nº Plaqueta</th>"+
				"	<th>Descrição</th>"+
				"	<th>Marca/Modelo</th>"+
				"	<th>Situação</th>"+
				"	<th>Fornecedor</th>"+
				"	<th>Data de Compra</th>"+
				"	<th></th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		for(var i in tbPatrimonio){
			var patrimonio = JSON.parse(tbPatrimonio[i]);
			var link = linkModulo + "/alterar.html?Descricao=" + patrimonio.Descricao + "&Marca=" + patrimonio.Marca + "&Plaqueta=" + patrimonio.Plaqueta + "&Situacao=" + patrimonio.Situacao + "&Fornecedor=" + patrimonio.Fornecedor + "&DataCompra=" + patrimonio.DataCompra + "&indice_selecionado=" + i;
				$("#patrimonio tbody").append("<tr>"+
			 	 "	<td style='text-align: center'><img src='delete.png' alt='"+i+"' title='Excluir' class='btnExcluir' style='cursor: pointer' /></td>" + 
			 	 "	<td>"+patrimonio.Plaqueta+"</td>" + 
				 "	<td>"+patrimonio.Descricao+"</td>" + 
				 "	<td>"+patrimonio.Marca+"</td>" + 
				 "	<td>"+patrimonio.Situacao+"</td>" + 
				 "	<td>"+patrimonio.Fornecedor+"</td>" +	
				 "	<td>"+patrimonio.DataCompra+"</td>" + 
				 "	<td style='text-align: center'><a class='editLink' data-item='"+i+"' href='"+link+"'><img src='edit.png' alt='"+i+"' title='Editar' class='btnEditar'/></a></td>" + 
					 "</tr>");
		}
	}

	// Exclui os dados do do Local Storage
	function Excluir(){
		indice_selecionado = parseInt($(this).attr("alt"));
		tbPatrimonio.splice(indice_selecionado, 1);
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
	}

	//Obtém o valor da útima plaqueta de patrimônio
	function obterUltimaPlaqueta(){
		var numeroPlaqueta = 1;
		for (var item in tbPatrimonio) {
			var i = JSON.parse(tbPatrimonio[item]);
			if (i["Plaqueta"] > numeroPlaqueta)
				numeroPlaqueta = i;
			else numeroPlaqueta = ++i["Plaqueta"];
		}
		$("#patri_plaqueta").val(numeroPlaqueta); // Define o valor da próxima plaqueta
	}
	if($("body").hasClass("cadastrar"))	obterUltimaPlaqueta();

	// Limpa o form e redefine o valor da plaqueta no campo
	$('#btnLimpar').click(function(e){
		e.preventDefault();
		$(this).closest('form').get(0).reset();
		obterUltimaPlaqueta();
	});

	//Checa se o valor já existe para determinada propriedade
	function checarValorExistente(propriedade, valor){
		var patrimonio = null;
		for (var item in tbPatrimonio) {
			var i = JSON.parse(tbPatrimonio[item]);
			if (i[propriedade] == valor) patrimonio = i;
		}
		return patrimonio;
	}

	if($("body").hasClass("consultar"))	Listar();


	$("#fomr_cadas_patri").bind("submit",function(){
		if(operacao == "A") return Adicionar();
		else {
			//window.location = linkModulo + "/consult.html";
			//$(location).attr('href', linkModulo + "/consult.html");
			return Editar();
		}
	});

	/*$(".btnEditar").on("click", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var patrimonio = JSON.parse(tbPatrimonio[indice_selecionado]);
		$("#patri_descricao").val(patrimonio.Descricao);
		$("#patri_marca").val(patrimonio.Marca);
		$("#patri_plaqueta").attr("readonly","readonly");
		$("#patri_situacao").val(patrimonio.Situacao);
		$("#patri_fornecedor").val(patrimonio.Fornecedor);
		$("#patri_dataCompra").val(patrimonio.DataCompra);
		$("#patri_descricao").focus();
	});*/


	$(".btnExcluir").bind("click", function(){
		var excluir = confirm("Tem certeza que deseja excluir este registro?");
		if(excluir == true) {
			indice_selecionado = parseInt($(this).attr("alt"));
			Excluir();
			Listar();
		}
	});


	function Cancelar(){
		operacao = "A";
		window.location.replace(linkModulo + "/consulta.html");
		return false;
	}
	$("#btnCancelar").bind("click", function(){Cancelar()});


	function Cadastrar(){
		window.location.replace(linkModulo + "/index.html");
		return false;
	}
	$("#btnCadastrar").bind("click", function(){Cadastrar()});
	
});