var cantina;
		var cantinaOutput;
		var salvar;

		window.addEventListener("load",function(){
			//guarda em uma variável o elemento tasks-output
			cantinaOutput = document.getElementById("tasks-output")
			if(localStorage.getItem("tasks")){
				cantina = JSON.parse(localStorage.getItem("tasks"));
				showList()
			}else{
				cantina = [];
			}
			
			if(cantina.length == 0){
				cantinaOutput.innerHTML = "<p class='lead'>Não há de produtos cadastrados.</p>";
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			document.getElementById("form-task").addEventListener("submit",onSubmit);
			cantinaOutput.addEventListener("click",clickList)
		})
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "td"){
				e.target.dataset.done = (e.target.dataset.done === 'true')? false : true;
				cantina[e.target.dataset.id].done = e.target.dataset.done;
				saveList();
			}else if(e.target.localName == "button"){
				clearList()
			}
		}		

		function onSubmit(e){
			var task = {};
			salvar = false;
			//pego o valor cadastrado no primeiro input do meu form
			task.Codigo = e.target[0].value;
			task.Descricao = e.target[1].value;
			task.Preco = e.target[2].value;
			task.id = cantina.length;
			task.done = "false";
			
			//adicionando a task na lista
			cantina.push(task);
			saveList();
			showList();

			document.getElementById('Codigo').value = '';
			document.getElementById('Descricao').value = '';
			document.getElementById('Preco').value = '';
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("tasks",JSON.stringify(cantina));
			if (salvar === false)
			{
				alert('Produto salvo com sucesso!');
			}
		}
		
		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < cantina.length; i++){
				if(cantina[i].done === true){
					cantina.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					cantina[i].id = i;
				}
			}
			showList();
			saveList();
		}

		function checagem(i){
			if (document.getElementById('chk'+i).checked){
              cantina[i].done = true;				
			} 
			else{
			  cantina[i].done = false;					
			}			
		}
		
		function showList(){
			//mostra a lista de todo
			var total = cantina.length;
			if(total > 0){
				var htmlTemp = "<table class='table table-striped'><thead><tr><th>Código</th><th>Descrição</th><th>Preço</th></tr></thead><tbody>"; 
				for(var i = 0; i < total; i++){
					htmlTemp 
					+= "<tr><td>"+cantina[i].Codigo+"</td><td>"+cantina[i].Descricao+"</td><td>"+cantina[i].Preco+"</td><td>"+
					"<label><input type='checkbox' id='chk"+cantina[i].id+"' onclick=checagem('"+i+"');> Excluir</label></td></tr>"					
				}
				htmlTemp += "</tbody></table><br/><center><button>Limpar produtos selecionados</button></center>";
				cantinaOutput.innerHTML = htmlTemp;
			}else{
				cantinaOutput.innerHTML = "Não há de produtos cadastrados."
			}
		}
		
		

		