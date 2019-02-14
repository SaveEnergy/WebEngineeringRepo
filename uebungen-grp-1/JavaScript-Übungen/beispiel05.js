'use strict';

let kontostand=prompt('Kontostand?', 100);

if (kontostand > 0 && kontostand < 1000000)
{
    alert('Sie haben Geld!');
}
else if (kontostand >= 1000000)
{
    alert('Sie sind MILLIONÄR!')
}
else if (kontostand == 0)
{
    alert('Sie haben kein Geld.');
}
//else if (kontostand < 0)
else 
{
    alert('Du hast Schulden');
}

alert('Jetzt gibt es zehn Einzahlungen a 20 Euro.');

kontostand=Number(kontostand);

for (let i=0; i<10; i++)
{
    kontostand+=20;
    console.log('Kontostand nach '+ (i+1) + '. Einzahlung ' + kontostand);
}

function berechneKontostand()
{
    kontostand+=(einzahlung*1.1);
    return kontostand;
}

let einzahlung=prompt('Wie viel möchten Sie einzahlen?', '10');

kontostand=berechneKontostand();

alert('Sie haben nun einen Kontostand von ' + kontostand);