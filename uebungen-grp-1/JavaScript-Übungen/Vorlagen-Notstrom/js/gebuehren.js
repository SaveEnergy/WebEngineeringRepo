'use strict';

let personen=1;

function berechnePreis()
{
    let preis=500;
    personen=prompt('Wie viele Personen möchten an der Schulung teilnehmen?', '1');
    personen=Number(personen);
    let summe=0;

    for (let i=0; i<personen; i++)
    {
        if (i < 3)
        {
            summe+=preis;
        }
        else if (i < 5)
        {
            summe+=preis*0.7;
        }
        else if (i < 8)
        {
            summe+=preis*0.5;
        }
        else
        {
            summe+=preis*0.4;
        }
    }

    summe*=1.19;

    alert('Preis inkl. MwSt für ' + personen + ' Personen: ' + summe.toFixed(2) + ' Euro');
}

function teilnehmer()
{
    let member=[];
    for (let i=0; i<personen; i++)
    {
        member[i]=prompt('Wie heißt der ' + (i+1) + '. Teilnehmer?', 'Name');
        console.log(member[i]);
    }
}


function adresse() {

    function Rechnung(firmenName, str, plz, ort)
    {
        this.firmenName=firmenName;
        this.str=str;
        this.plz=plz;
        this.ort=ort;
    }

    let a = new Rechnung ();

    a.firmenName = prompt('Wie ist der Firmen Name?','Name');
    a.str = prompt('Wie heißt die Straße?', 'Straße');
    a.plz = prompt('Wie ist die PLZ?', '00000');
    a.ort = prompt('Wie heißt der Ort?', 'Ort');

    console.log(a);
}