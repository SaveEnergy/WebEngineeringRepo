document.getElementById("btnBerechnung").addEventListener("click", berechnePreis);
document.bestellung.anzahl.addEventListener("input", berechnePreis);
document.bestellung.waehrung.addEventListener("change", berechnePreis);
document.bestellung.info.addEventListener("click", infoLink);
berechnePreis();

document.getElementById("rechnung-ide").addEventListener("click", function () {
    document.getElementById("rechnung").style.visibility = hidden;
});
document.getElementById("rechnung-abw").addEventListener("click", function () {
    document.getElementById("rechnung").style.visibility = visible;
});

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
        error += "Bitte eine Postleitzahl eingeben\n";
    }

    if (document.bestellung.vorname.value.length === 0) {
        document.bestellung.vorname.style.borderColor = "red";
        error += "Bitte eine Vornamen eingeben\n";
    }

    if (document.bestellung.nachname.value.length === 0) {
        document.bestellung.nachname.style.borderColor = "red";
        error += "Bitte eine Nachnamen eingeben\n";
    }

    if (!document.bestellung.agb.checked) {
        document.getElementById("agb-text").style.color = "red";
        error += "Bitte stimmen Sie unseren AGBs zu\n";
    }

    if (error !== "") {
        alert(error);
        return false;
    }

    return true;
}

function infoLink() {
    if (document.bestellung.lieferung.value === "dhl") {
        window.open("https://www.dhl.de", "_blank", "width = 500, height = 500");
    }
    if (document.bestellung.lieferung.value === "ups") {
        window.open("https://www.ups.com", "_blank", "width = 500, height = 500");
    }
    if (document.bestellung.lieferung.value === "hermes") {
        window.open("https://www.myhermes.de", "_blank", "width = 500, height = 500");
    }
}
