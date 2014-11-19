$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição
	
	var indice_selecionado = -1;

	var tbPatrimonio = localStorage.getItem("tbPatrimonio"); // Recupera os dados armazenados

	tbPatrimonio = JSON.parse(tbPatrimonio); // Converte string para objeto

	if(tbPatrimonio == null) tbPatrimonio = []; // Caso não haja conteúdo, iniciamos um vetor vazio


    //Método adicionar
	function Adicionar(){
		var cli = GetPatrimonio("Plaqueta", $("#patri_plaqueta").val());
		if(cli != null){
			alert("Plaqueta já cadastrada.");
			return;
		}

		var patrimonio = JSON.stringify({
			Descricao   : $("#patri_descricao").val(),
			Marca       : $("#patri_marca").val(),
			Plaqueta    : $("#patri_plaqueta").val(),
			Situacao    : $("#patri_situacao").val(),
			Fornecedor  : $("#patri_fornecedor").val(),	
			DataCompra  : $("#patri_dataCompra").val()
		});

		tbPatrimonio.push(patrimonio);
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
		return true;
	}


	function Editar(){
		tbPatrimonio[indice_selecionado] = JSON.stringify({
			Descricao   : $("#patri_descricao").val(),
			Marca       : $("#patri_marca").val(),
			Plaqueta    : $("#patri_plaqueta").val(),
			Situacao    : $("#patri_situacao").val(),
			Fornecedor  : $("#patri_fornecedor").val(),	
			DataCompra  : $("#patri_dataCompra").val()
			});
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
		operacao = "A";
		return true;
	}


	function Listar(){
		$("#patrimonio").html("");
		$("#patrimonio").html(
			"<thead>"+
			"	<tr>"+
			"<th></th>"+
			"	<th>Descrição</th>"+
			"	<th>Marca/Modelo</th>"+
			"	<th>Nº Plaqueta</th>"+
			"	<th>Situação</th>"+
			"	<th>Fornecedor</th>"+
			"	<th>Data de Compra</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbPatrimonio){
			var patrimonio = JSON.parse(tbPatrimonio[i]);
		  	$("#patrimonio tbody").append("<tr>"+
									 	 "	<td><img src='edit.png' alt='"+i+"' title='Editar' class='btnEditar'/><img src='delete.png' alt='"+i+"' title='Excluir' class='btnExcluir'/></td>" + 
										 "	<td>"+patrimonio.Descricao+"</td>" + 
										 "	<td>"+patrimonio.Marca+"</td>" + 
										 "	<td>"+patrimonio.Plaqueta+"</td>" + 
										 "	<td>"+patrimonio.Situacao+"</td>" + 
										 "	<td>"+patrimonio.Fornecedor+"</td>" +  
										 "	<td>"+patrimonio.DataCompra+"</td>" + 
		  								 "</tr>");
		 }
	}


	function Excluir(){
		indice_selecionado = parseInt($(this).attr("alt"));
		tbPatrimonio.splice(indice_selecionado, 1);
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
		alert("Registro excluído.");
	}


	//Método utilizado para salvar
	function GetPatrimonio(propriedade, valor){
		var patrimonio = null;
        for (var item in tbPatrimonio) {
            var i = JSON.parse(tbPatrimonio[item]);
            if (i[propriedade] == valor)
                patrimonio = i;
        }
        return patrimonio;
	}

	Listar();


	$("#fomr_cadas_patri").bind("submit",function(){
		if(operacao == "A")
			return Adicionar();
		else
			return Editar();		
	});


	$(".btnEditar").bind("click", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var cli = JSON.parse(tbPatrimonio[indice_selecionado]);
		$("#patri_descricao").val(patrimonio.Descricao);
		$("#patri_marca").val(patrimonio.Marca);
		$("#patri_plaqueta").attr("readonly","readonly");
		$("#patri_situacao").val(patrimonio.Situacao);
		$("#patri_fornecedor").val(patrimonio.Fornecedor);
		$("#patri_dataCompra").val(patrimonio.DataCompra);
		$("#patri_descricao").focus();
	});


	$(".btnExcluir").bind("click", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});
});