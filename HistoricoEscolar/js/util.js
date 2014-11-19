function exibirMensagem(){
  alert('Cadastro realizado com sucesso!');
  window.location = window.location;
}

var historico;
var historicoOutput;
		
window.addEventListener("load",function(){
	//guarda em uma variável o elemento tasks-output
	historicoOutput = document.getElementById("tasks-output")
	if(localStorage.getItem("tasks")){
		historico = JSON.parse(localStorage.getItem("tasks"));
		showList()
	}else{
		historico = [];
	}
	
	if(historico.length == 0){
		historicoOutput.innerHTML = "Cadastro de notas não realizado!"
	}
	//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
	document.getElementById("form-task").addEventListener("submit",onSubmit);
	historicoOutput.addEventListener("click",clickList)
})

function clickList(e){
	//somente fazer algo quando clicar em um item li
	if(e.target.localName == "li"){
		e.target.dataset.done = (e.target.dataset.done === 'true')? false : true;
		historico[e.target.dataset.id].done = e.target.dataset.done;
		saveList();
	}else if(e.target.localName == "button"){
		clearList()
	}
}

function onSubmit(e){
	var task = {};

	//pego o valor cadastrado no primeiro input do meu form
	task.Nome = e.target[0].value;
	task.Disciplina = e.target[1].value;
	task.Nota1 = parseFloat(e.target[2].value);
	task.Nota2 = parseFloat(e.target[3].value);
	task.Media = (parseFloat(e.target[2].value) + parseFloat(e.target[3].value))/2;
	task.id = historico.length;
	task.done = "false";
	
	//adicionando a task na lista
	historico.push(task);
	saveList();
	showList();
	// utiliza o preventDefault para evitar do form realizar o reload da página
	e.preventDefault();
}

function saveList(){
	//converte os dados em string e salva no local storage 
	localStorage.setItem("tasks",JSON.stringify(historico));
}

function clearList(){
	//varre a lista a procura de tarefas realizadas
	for(var i = 0; i < historico.length; i++){
		if(historico[i].done === 'true'){
			historico.splice(i, 1);  //remove 1 elemento na posição i;
			i = 0;  //voltando o indice no array para validar novamente a lista
		}else{
			historico[i].id = i;
		}
	}
	showList();
	saveList();
}

function showList(){
	//mostra a lista de todo
	var total = historico.length;
	if(total > 0){
		var htmlTemp = "<ul>"; 
		for(var i = 0; i < total; i++){
			htmlTemp 
			+= "<li data-id='"
			+historico[i].id
			+"' data-done='" 
			+ historico[i].done 
			+ "'>"
			+ "Nome:"
			+ historico[i].Nome 
			+ " - "
			+ "Disciplina:"
			+ historico[i].Disciplina 
			+ " - "
			+ " Nota1: "
			+ historico[i].Nota1
			+" - "
			+ " Nota2: "
		    + historico[i].Nota2 
			+" - "
			+ " Média: "
			+ historico[i].Media
			+"</li>"
		}
		historicoOutput.innerHTML = htmlTemp;
	}else{
		historicoOutput.innerHTML = "Cadastro de notas não realizado!"
	}
}

function formatDate(date){
	// formata a data para o formato DD/MM/YYYY
	var time = new Date(date);
	var saida = time.getDate() +"/"+ time.getMonth() + "/" + time.getFullYear();
	return saida;
}

$("#limpar").click(function() {
    localStorage.clear();
    window.location = window.location;
});