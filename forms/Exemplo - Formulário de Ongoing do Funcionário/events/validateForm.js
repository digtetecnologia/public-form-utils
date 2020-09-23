function validateForm(form) {
	
	var arrError = [];
	
	var companyId = getValue("WKCompany");

	if (form.getValue('codJornada') == null || form.getValue('codJornada') == '') {
		arrError.push("Jornada não foi informado");
	}

	if (arrError.length > 0) {
		var error = loadErrors(arrError);
		throw error;
	}

}
function loadErrors(arrError) {
	var error = "<br><br>" + i18n.translate("configuracoes.validate.loadErrors") + "<br><br>";

	for (var i = 0; i < arrError.length; i++) {
		var count = i + 1;

		if (parseInt(i) > 0) {
			arrError[i] = "<br><strong>" + count + "</strong> - " + arrError[i];
		}
		else {
			arrError[i] = "<strong>" + count + "</strong> - " + arrError[i];
		}

		error += arrError[i];
	}

	return error;
}