function testaFrmCadastro(){
	
	//Capitura de dados do formulário
	var varNome = document.frmCadCli.nomAluno.value;
	var varMaricula = document.frmCadCli.matAluno.value;
	var varEmail = document.frmCadCli.email.value;
	var varConfEmail = document.frmCadCli.confirmaEmail.value;
	var varSenha = document.frmCadCli.senAluno.value;
	var varConfSenha = document.frmCadCli.confirmarSenha.value;	
		
	//Variável para mensagem de erro
	var varMsg = "Ocorreram os seguintes erros:\n";
	
	//Variável verificar erro erro
	var varErro = "N";
	
	//Verificando campos
	if (varNome == ""){
		varMsg += "  . Você deve digitar o usuário.\n";
		varErro = "S";
	}

	if (varMaricula == ""){
		varMsg += "  . Você deve digitar o usuário.\n";
		varErro = "S";
	}

	if (varMaricula < 11){
		varMsg += "  . Você deve digitar o usuário.\n";
		varErro = "S";
	}

	if (varSenha == ""){
		varMsg += "  . Você deve digitar a senha.\n";
		varErro = "S";
	}

	if (varSenha != varConfSenha){
		varMsg += "  . A confirmção da senha não bate com a senha.\n";
		varErro = "S";
	}

	if ((varEmail.indexOf('@') == -1) && (varEmail.indexOf('.') == -1)){
		varMsg += "  . Você deve digitar um E-Mail válido.\n";
		varErro = "S";
	}
	
	if (varEmail != varConfEmail){
		varMsg += "  . A confirmção do E-Mail não bate com o e-Mail.\n";
		varErro = "S";
	}

	if (varErro == "S"){
		
		alert(varMsg);
		return false;
		
	}else{
		
		return true;
		
	}

}

/*function enviardados(){

	 	if(document.dados.tx_nome.value=="" || document.dados.tx_nome.value.length < 8) { 
	 		alert( "Preencha campo NOME corretamente!" );
	 		document.dados.tx_nome.focus(); return false; 
	 		}
	 	 if( document.dados.tx_email.value=="" || document.dados.tx_email.value.indexOf('@')==-1 || document.dados.tx_email.value.indexOf('.')==-1 ) {

	 	  alert( "Preencha campo E-MAIL corretamente!" );
	 	  	document.dados.tx_email.focus(); 
	 	  		return false; 
	 	  	}
	 	 if (document.dados.tx_mensagem.value=="") {
	 	  		 alert( "Preencha o campo MENSAGEM!" );
	 	  		  document.dados.tx_mensagem.focus();
	 	  		  return false; } if (document.dados.tx_mensagem.value.length < 50 ) {
	 	  		   alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
	 	  		    document.dados.tx_mensagem.focus();
	 	  		    return false;
	 	  	} return true;
	 	  }*/