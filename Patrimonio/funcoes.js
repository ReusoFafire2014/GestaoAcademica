$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição
	
	var indice_selecionado = -1;

	// Copia os dados armazenados no Local Storage no formato string.
	var tbPatrimonio = localStorage.getItem("tbPatrimonio");

	// Converte a cópia dos dados de string para o formato JSON.
	tbPatrimonio = JSON.parse(tbPatrimonio); 

	if(tbPatrimonio == null) tbPatrimonio = []; // Caso não haja conteúdo no Local Storage, iniciamos um JSON vazio.


    //Método adicionar
	function Adicionar(){
		//var cli = checarValorExistente("Plaqueta", $("#patri_plaqueta").val());
		if(checarValorExistente("Plaqueta", $("#patri_plaqueta").val()) != null){
			alert("Plaqueta já cadastrada.");
			return;
		}

		// Obtem os valores informados nos campos e converte para o formato JSON
		var patrimonio = JSON.stringify({ 
			Descricao   : $("#patri_descricao").val(),
			Marca       : $("#patri_marca").val(),
			Plaqueta    : $("#patri_plaqueta").val(),
			Situacao    : $("#patri_situacao").val(),
			Fornecedor  : $("#patri_fornecedor").val(),	
			DataCompra  : $("#patri_dataCompra").val()
		});

		 // Adiciona o JSON criado acima à cópia dos dados
		tbPatrimonio.push(patrimonio);

		// Redefine o localStorage com a cópia dos dados
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

	// Monta a tabela de listagem com os dados do Local Storage
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

	// Exclui os dados do do Local Storage
	function Excluir(){
		indice_selecionado = parseInt($(this).attr("alt"));
		tbPatrimonio.splice(indice_selecionado, 1);
		localStorage.setItem("tbPatrimonio", JSON.stringify(tbPatrimonio));
		alert("Registro excluído.");
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
	obterUltimaPlaqueta();

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