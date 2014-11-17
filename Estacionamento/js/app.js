var estacionamento;
		var estacionamentoOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável o elemento tasks-output
			estacionamentoOutput = document.getElementById("tasks-output")
			if(localStorage.getItem("tasks")){
				estacionamento = JSON.parse(localStorage.getItem("tasks"));
				showList()
			}else{
				estacionamento = [];
			}
			
			if(estacionamento.length == 0){
				estacionamentoOutput.innerHTML = "Cadastro de Placas não realizado:"
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			document.getElementById("form-task").addEventListener("submit",onSubmit);
			estacionamentoOutput.addEventListener("click",clickList)
		})
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "li"){
				e.target.dataset.done = (e.target.dataset.done === 'true')? false : true;
				estacionamento[e.target.dataset.id].done = e.target.dataset.done;
				saveList();
			}else if(e.target.localName == "button"){
				clearList()
			}
		}
		
		function onSubmit(e){
			var task = {};
		
			//pego o valor cadastrado no primeiro input do meu form
			task.CPF = e.target[0].value;
			task.Placa = e.target[1].value;
			task.Horas = e.target[2].value;
			task.HorasTotal = e.target[2].value + 5;
			task.date = new Date();
			task.id = estacionamento.length;
			task.done = "false";
			
			//adicionando a task na lista
			estacionamento.push(task);
			saveList();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("tasks",JSON.stringify(estacionamento));
		}
		
		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < estacionamento.length; i++){
				if(estacionamento[i].done === 'true'){
					estacionamento.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					estacionamento[i].id = i;
				}
			}
			showList();
			saveList();
		}
		
		function showList(){
			//mostra a lista de todo
			var total = estacionamento.length;
			if(total > 0){
				var htmlTemp = "<ul>"; 
				for(var i = 0; i < total; i++){
					htmlTemp 
					+= "<li data-id='"
					+estacionamento[i].id
					+"' data-done='" 
					+ estacionamento[i].done 
					+ "'>"
					+ "CPF:"
					+ estacionamento[i].CPF 
					+ " - "
					+ "Placa:"
					+ estacionamento[i].Placa 
					+ " - "
					+ " Data: "
					+ formatDate(estacionamento[i].date)
					+"-"
					+ " Horas: "
				    + estacionamento[i].Horas 
					+"-"
					+ " Valor a pagar: "
					+ estacionamento[i].HorasTotal
					+"</li>"
				}
				htmlTemp += "</ul><button>Limpar estacionamentos já pagos</button>";
				estacionamentoOutput.innerHTML = htmlTemp;
			}else{
				estacionamentoOutput.innerHTML = "Cadastro de Placas não realizado: "
			}
		}
		
		function formatDate(date){
			// formata a data para o formato DD/MM/YYYY
			var time = new Date(date);
			var saida = time.getDate() +"/"+ time.getMonth() + "/" + time.getFullYear();
			return saida;
		}
		

		