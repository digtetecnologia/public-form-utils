function afterStateEntry(sequenceId){
	 log.info("@@ Inicio | Employee Journey - Ongoing | afterStateEntry");
	 
	 
	 	var dataset = null;
		var cCodJornada = hAPI.getCardValue("hidden_codJornada");
		var cStatusBase64 = hAPI.getCardValue("hidden_codEtapa"); /* etapa executada */
		var codigoFormularioPublico = hAPI.getCardValue("hidden_codigoFormularioPublico");
		
        var aux = new java.lang.String(cStatusBase64);
    	var asBytes = java.util.Base64.getDecoder().decode(aux);
    	var cCodStatus = new java.lang.String(asBytes, "utf-8"); 

		var cWKNumProces = getValue("WKNumProces");
		var cWKNextState = sequenceId;
		var cemail = hAPI.getCardValue("email");
		
		dataset = sendEmail(cCodJornada, cWKNumProces, cWKNextState, cemail);

    	if (dataset != null && dataset != undefined && dataset.rowsCount > 0) {  
    		
    		var descricao = dataset.getValue(0, "descricao");

    		hAPI.setCardValue("codEtapa", descricao);
    		
    		var linkInsert = dataset.getValue(0, "linkInsert");
    		linkInsert = linkInsert.replace("&","#and#");

    		hAPI.setCardValue("hidden_linkInsert", linkInsert);
    		
    		var linkView = dataset.getValue(0, "linkView");
    		linkView = linkView.replace("&","#and#");
    		
    		hAPI.setCardValue("hidden_linkView", linkView);

    		
    	}
		
	    
		log.info("@@ Fim | Employee Journey - Ongoing | afterStateEntry");
	    
}

function sendEmail(cCodJornada, cWKNumProces, cWKNextState, cemail){
 var c1 = DatasetFactory.createConstraint("codJornada", cCodJornada, cCodJornada, ConstraintType.MUST);
 var c2 = DatasetFactory.createConstraint("WKNumProces", cWKNumProces, cWKNumProces, ConstraintType.MUST);
 var c3 = DatasetFactory.createConstraint("WKNextState", cWKNextState, cWKNextState, ConstraintType.MUST);
 var c4 = DatasetFactory.createConstraint("email", cemail, cemail, ConstraintType.MUST);
 
 var constraints   = new Array(c1, c2, c3, c4);
 var dataset = DatasetFactory.getDataset("ds_dpf_send_email", null, constraints, null);

 return dataset;
}