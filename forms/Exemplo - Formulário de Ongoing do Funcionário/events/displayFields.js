function displayFields(form,customHTML){
	var state = getValue("WKNumState");
	var user = getValue("WKUser");
	var modo = form.getFormMode();
	
	customHTML.append("<script>");
	customHTML.append("$(function(){" );

	if (state == 0 || state == 1){
		form.setVisible("codEtapa", false);		
		form.setVisible("linkView", false);		
		form.setVisible("linkInsert", false);		
		

		
		customHTML.append("$('#btnAcessarlinkView').remove(); " );		
		customHTML.append("$('#btnAcessarlinkInsert').remove(); " );		
		

		

	}

	customHTML.append("var cAux = document.getElementById('hidden_linkInsert').value.replace(/#and#/g,'&');");	
	customHTML.append("document.getElementById('hidden_linkInsert').value = cAux;");	
	
	customHTML.append("if (document.getElementById('linkInsert') != null) { document.getElementById('linkInsert').innerHTML = document.getElementById('hidden_linkInsert').value;}");		
	customHTML.append("if (document.getElementById('_linkInsert') != null) { document.getElementById('_linkInsert').value = document.getElementById('hidden_linkInsert').value;}");		

	customHTML.append("document.getElementById('hidden_linkView').value = document.getElementById('hidden_linkView').value.replace(/#and#/g,'&');");	
	
	customHTML.append("if (document.getElementById('linkView') != null) { document.getElementById('linkView').innerHTML = document.getElementById('hidden_linkView').value;}");		
	customHTML.append("if (document.getElementById('_linkView') != null) { document.getElementById('_linkView').value = document.getElementById('hidden_linkView').value;}");		
	
	customHTML.append("});");
	customHTML.append("</script>");
	
}