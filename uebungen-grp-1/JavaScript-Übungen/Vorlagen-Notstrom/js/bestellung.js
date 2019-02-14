
document.getElementById("btnBerechnung").addEventListener("click", berechnePreis);
document.bestellung.anzahl.addEventListener("input", berechnePreis);
document.bestellung.waehrung.addEventListener("change", berechnePreis);
berechnePreis();

function berechnePreis() {
    let anzahl = document.bestellung.anzahl.value;
    let summe = anzahl * 999;

    if (document.bestellung.waehrung.value === "chf") {
        summe *= 1.14;
    } else if (document.bestellung.waehrung.value === "usd") {
        summe *= 0.89;
    }

    document.getElementById("summe").innerHTML = summe.toFixed(2);
}