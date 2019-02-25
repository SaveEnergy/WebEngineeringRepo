document.getElementById("btnBerechnung").addEventListener("click", berechnePreis);
document.bestellung.anzahl.addEventListener("input", berechnePreis);
document.bestellung.waehrung.addEventListener("change", berechnePreis);
berechnePreis();

function berechnePreis() {
    let anzahl = document.bestellung.anzahl.value;

    if (anzahl < 0) {
        anzahl = 0;
    }

    let summe = anzahl * 999;

    if (document.bestellung.waehrung.value === "chf") {
        summe *= 1.14;
    } else if (document.bestellung.waehrung.value === "usd") {
        summe *= 0.89;
    }

    document.getElementById("summe").innerHTML = summe.toFixed(2);
}

function foolproof() {
    let error = "";

    if (document.bestellung.name.value.length === 0) {
        document.bestellung.name.style.borderColor = "red";
        error += "Bitte das Feld Firmenname ausfüllen\n";
    }

    if (document.bestellung.str.value.length === 0) {
        document.bestellung.str.style.borderColor = "red";
        error += "Bitte das Feld Straße ausfüllen\n";
    }

    if (document.bestellung.plz.value.length === 0) {
        document.bestellung.plz.style.borderColor = "red";
        error += "Bitte das Feld Postleitzahl ausfüllen\n";
    }

    if (error.length !== 0) {
        alert(error);
        return false;
    }

    return true;
}