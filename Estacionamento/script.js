function criarTabela(parametro1, parametro2){
    // vamos criar o elemento HTML table
   if ((parametro1.value == '') && (parametro2.value == '')) {

   	 alert('Informe os Campos '+parametro1.name+' e '+parametro2.name);
   } 
   else{
    var tabela = document.createElement("table");
    tabela.border = "1px";
    tabela.cellSpacing = "0px";
    tabela.cellPadding = "3px";

    // vamos criar o corpo da tabela, ou seja, o tbody 
    var corpo = document.createElement("tbody");
    tabela.appendChild(corpo);
    
    // vamos criar três linhas contendo quatro células cada uma
    for(var i = 0; i < 1; i++){
      var linha = corpo.insertRow(-1);
      
      for(var j = 0; j < 4; j++){
         var celula = linha.insertCell(-1);
         celula.innerHTML = "Célula " + i + ", " + j + "";
      }
    }

    // vamos anexar a tabela recém-criada a um elemento div
    var container = document.getElementById("container");
    container.appendChild(tabela);
}
  } 