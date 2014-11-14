function criarTabela(parametro1, parametro2){
    
    document.getElementById("container").innerHTML="";

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

      var cabecalho = corpo.insertRow(-1);
        for(var j = 0; j < 2; j++){
           var celula = cabecalho.insertCell(-1);
           if (j == 0){celula.innerHTML = parametro1.name;}
           if (j == 1){celula.innerHTML = parametro2.name;}
           
        }

      // vamos criar três linhas contendo quatro células cada uma
      for(var i = 0; i < 1; i++){
        var linha = corpo.insertRow(-1);
        
        for(var j = 0; j < 2; j++){
           var celula = linha.insertCell(-1);
           if (j == 0){celula.innerHTML = parametro1.value;}
           if (j == 1){celula.innerHTML = parametro2.value;}
           
        }
      }

      // vamos anexar a tabela recém-criada a um elemento div
      var container = document.getElementById("container");
      container.appendChild(tabela);
}
  } 