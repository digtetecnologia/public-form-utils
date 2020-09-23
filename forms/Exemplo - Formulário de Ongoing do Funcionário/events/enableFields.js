function enableFields(form){ 
	
	var activity = getValue('WKNumState');
	
	if (activity != 1 &&  activity != 0) {
		
		form.setEnabled('codJornada', false);
		form.setEnabled('codEtapa', false);
		form.setEnabled('linkView', false);
		form.setEnabled('linkInsert', false);
		form.setEnabled('usuario', false);
		form.setEnabled('nome', false);
		form.setEnabled('sobrenome', false);
		form.setEnabled('email', false);
		form.setEnabled('celular', false);
		form.setEnabled('nomeMentor', false);
		form.setEnabled('sobrenomeMentor', false);
		form.setEnabled('emailMentor', false);
		form.setEnabled('celularMentor', false);
		
	}
	
}
	
	
