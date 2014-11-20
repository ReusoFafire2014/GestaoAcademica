var estacionamento;
var excluir;

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
				estacionamentoOutput.innerHTML = "<p class='lead'>Nenhuma Placa Cadastrada!</p>";
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
			task.CPF     = e.target[0].value;
			task.Placa   = e.target[1].value;
			task.HoraIn  = e.target[2].value;
			task.HoraOut = e.target[3].value;
			task.HorasTotal = e.target[3].value - e.target[2].value;
			task.date = new Date();
			task.id = estacionamento.length;
			task.done = "false";
			excluir = false;
			
			//adicionando a task na lista
			estacionamento.push(task);
			saveList();
			showList();
			document.getElementById('CPF').value = '';
			document.getElementById('Placa').value = '';
			document.getElementById('HoraIn').value = '';
			document.getElementById('HoraOut').value = '';
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("tasks",JSON.stringify(estacionamento));
			if (excluir == false){
			alert('Estacionamento salvo com sucesso!');
		    }
		}
		
		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < estacionamento.length; i++){
				if(estacionamento[i].done === true){
					estacionamento.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					estacionamento[i].id = i;
				}
			}
			showList();
			saveList();
		}

		function checagem(i){
			if (document.getElementById('chk'+i).checked){
              estacionamento[i].done = true;				
			} 
			else{
			  estacionamento[i].done = false;					
			}
			
		}
		
		function showList(){
			//mostra a lista de todo
			var total = estacionamento.length;
			if(total > 0){
				var htmlTemp = "<center><button class='btn btn-default' id='excluir' name='excluir'>Apagar Estacionamentos</button></center></br>";
				htmlTemp += "<table class='table table-striped'>"; 
				htmlTemp += "<thead><tr><th>Código</th><th>CPF</th><th>Placa</th><th>Hora Entrada</th><th>Hora Saída</th><th>Data do Estacionamento</th></tr></thead><tbody>";
				for(var i = 0; i < total; i++){
					htmlTemp 
					+= "<tr><td>"
					+ estacionamento[i].id
					+ "</td><td>" 
					+ estacionamento[i].CPF
					+ "</td><td>"
					+ estacionamento[i].Placa 
					+ "</td><td>"
					+ estacionamento[i].HoraIn 
					+ " </td><td>"
					+ estacionamento[i].HoraOut
					+ "</td><td>"
                    + formatDate(estacionamento[i].date) 
					+ "</td><td>"
				    + "<label><input type='checkbox' id='chk"+estacionamento[i].id+"' onclick=checagem('"+i+"');> Excluir</label>"
					+ "</td>"
				}
				htmlTemp += "</table>";
				
				estacionamentoOutput.innerHTML = htmlTemp;
			}else{
				estacionamentoOutput.innerHTML = "<p class='lead'>Nenhuma Placa Cadastrada!</p>";
			}
		}
		
		function formatDate(date){
			// formata a data para o formato DD/MM/YYYY
			var time = new Date(date);
			var saida = time.getDate() +"/"+ time.getMonth() + "/" + time.getFullYear();
			return saida;
		}
		

		