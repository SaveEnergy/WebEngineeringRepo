'use strict';

//alert("Test!");

function berechnePreis()
{
	let preis=500;
	//TODO Wie viele Personen möchten teilnehmen?
	let anzahl=prompt("Wie viele Personen?", "3");
	let summe=preis*anzahl*1.19;
	


	alert("Preis inkl. MwSt: " 
		+ summe.toLocaleString("de-DE", {minimumFractionDigits: 2, 
			maximumFractionDigits: 2})
		+ " Euro" );
}