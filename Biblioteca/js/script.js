		var biblioteca;
		var bibliotecaOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável o elemento tasks-output
			bibliotecaOutput = document.getElementById("tasks-output")
			if(localStorage.getItem("livros")){
				biblioteca = JSON.parse(localStorage.getItem("livros"));
				showList()
			}else{
				biblioteca = [];
			}
			
			if(biblioteca.length == 0){
				bibliotecaOutput.innerHTML = "Cadastro de Livros não realizado!"
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			document.getElementById("form_task").addEventListener("submit",onSubmit);
			bibliotecaOutput.addEventListener("click",clickList)
		})
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "li"){
				e.target.dataset.done = (e.target.dataset.done === 'true')? false : true;
				biblioteca[e.target.dataset.id].done = e.target.dataset.done;
				saveList();
			}else if(e.target.localName == "button"){
				clearList()
			}
		}
		
		function onSubmit(e){
			var task = {};
		
			//pego o valor cadastrado no primeiro input do meu form
			task.tituloid = e.target[0].value;
			task.autorid = e.target[1].value;
			task.anoid = e.target[2].value;
			task.paginasid = e.target[3].value;
			task.generoid = e.target[4].value;
			task.editoraid = e.target[5].value;
			task.id = biblioteca.length;
			task.done = "false";
			
			//adicionando a task na lista
			biblioteca.push(task);
			saveList();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("livros",JSON.stringify(biblioteca));			
		}
		
		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < biblioteca.length; i++){
				if(biblioteca[i].done === 'true'){
					biblioteca.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					biblioteca[i].id = i;
				}
			}
			showList();
			saveList();
		}
		
		function showList(){
			//mostra a lista de todo
			var total = biblioteca.length;
			if(total > 0){	
			var htmlTemp ="<table class='table table-bordered table-striped table-condensed' style='width:695px'> <thead>"
			+ "	<tr>"
			+ "	<th>Título</th>"
			+ "	<th>Autor</th>"
			+ "	<th>Ano</th>"
			+ "	<th>Nº de Páginas</th>"
			+ "	<th>Gênero</th>"
			+ "	<th>Editora</th>"
			+ "	<th>Ação</th>"			
			+ "	</tr>"
			+ "</thead>"
			+ "<tbody>";
			 
			for(var i = 0; i < total; i++){
				htmlTemp +="<tr><td>"+biblioteca[i].tituloid+"</td><td>"+biblioteca[i].autorid+"</td>"
				+"<td>"+biblioteca[i].anoid+"</td><td>"+biblioteca[i].paginasid+"</td><td>"
				+biblioteca[i].generoid+"</td><td>"+biblioteca[i].editoraid+"</td><td>"				
				+"<input type='submit' class='btn btn-default' value='Excluir' onclick='excluirLivro(this);'/></td></tr>";
			} 

			htmlTemp +="</tbody> </table>";
			bibliotecaOutput.innerHTML = htmlTemp;
			}
			else{
				var html="<h1 class='align-center' style='margin-top: -75px!important; color: white; width:695px'> "+
				+"Cadastro de Livros não realizado!</h1>";
			 	bibliotecaOutput.innerHTML = html;
			 }
		}
			
function exibirMensagem(){
  alert("Cadastro de Livros realizado com sucesso!");
  window.location = window.location;
}
	
function excluirLivro(e){

	biblioteca.splice(e, 1);    
    localStorage.setItem("livros",JSON.stringify(biblioteca));	
    alert("Registro excluído.");

	saveList();
	showList();
	// utiliza o preventDefault para evitar do form realizar o reload da página
	e.preventDefault();	
}
