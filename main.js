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

	remove (div1);
	remove (div2);
	remove (div3);
	remove (div4);

	console.log( "Popups Removed" );

});

