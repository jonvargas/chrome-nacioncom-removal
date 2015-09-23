function byId (id) {
  return document.getElementById(id);
}

function byClass (className) {
  return document.getElementsByClassName(className);
}

function remove (elem) {
	if (!elem)
		return elem;
	else
    	return elem.parentNode.removeChild(elem);
}

// A $( document ).ready() block.
$( document ).ready(function() {

	console.log( "Removing Popups" );

	var div1 = byId ("alerta_suscripcion_paywall");
	var div2 = ! div1 ? null : div1.previousElementSibling;
	var div3 = byClass ("LNA_paywall_modal_wrapper")[0];
	var div4 = ! div3 ? null : div3.previousElementSibling;
	var div5 = byClass ("suscribase")[0];
	var div6 = ! div5 ? null : div5.previousElementSibling;
	var div7 = byId ("conteo_notas_paywall");
	var div8 = ! div7 ? null : div7.previousElementSibling;

	remove (div1);
	remove (div2);
	remove (div3);
	remove (div4);
	remove (div5);
	remove (div6);
	remove (div7);
	remove (div8);

	console.log( "Popups Removed" );

});

