'use strict';

function sonderPreis()
{
    let p = document.getElementById('preis');
    console.log(document.getElementById('preis'));
    p.style.color = 'red';
    p.style.fontSize = '36px';
}

function nettoPreis()
{
    let preis = document.getElementById('preis').textContent /= 1.19;

    document.getElementById('preis').textContent = preis.toFixed(2);
    document.getElementById('preisbereich').childNodes[2].textContent = ' Euro zzgl. 19% MwSt. ';
    document.getElementById('preisbutton').textContent = 'zeige Bruttopreis';
    document.getElementById('preisbutton').setAttribute('onclick',"bruttoPreis()");

    let highlight = document.getElementById('highlight');
        highlight.style.color = 'grey';
        highlight.style.fontStyle = 'oblique';
}

function bruttoPreis()
{
    let preis = document.getElementById('preis').textContent *= 1.19;

    document.getElementById('preis').textContent = preis.toFixed(2);
    document.getElementById('preisbereich').childNodes[2].textContent = ' Euro inkl. 19% MwSt. ';
    document.getElementById('preisbutton').textContent = 'zeige Nettopreis';
    document.getElementById('preisbutton').setAttribute('onclick',"nettoPreis()");

    let highlight = document.getElementById('highlight');
        highlight.style.color = 'black';
        highlight.style.fontStyle = 'normal';
}

function init()
{

    console.log("DOM geladen!");

    let imgTurn = document.getElementById('bild');

    function turn()
    {

        if (imgTurn.getAttribute('src') == 'img/notstromaggregat.jpg')
        {
            imgTurn.setAttribute('src',"img/notstromaggregat-rueckseite.jpg");
        }
        else
        {
            imgTurn.setAttribute('src', "img/notstromaggregat.jpg");
        }

    }

    imgTurn.addEventListener('mouseover', turn);
    imgTurn.addEventListener('mouseout', turn);

    let kreis = document.getElementById('kreis');

    function verschiebeKreis(top, left, id)
    {

        if (document.getElementById(id).style.opacity != '0.3')
        {
            kreis.style.visibility = 'visible';
            kreis.style.top = top;
            kreis.style.left = left;
            document.getElementById('lupe').style.opacity = 1;
            document.getElementById('lupe2').style.opacity = 1;
            document.getElementById('lupe3').style.opacity = 1;
            document.getElementById(id).style.opacity = '0.3';
        }
        else
        {
            kreis.style.visibility = 'hidden';
            document.getElementById(id).style.opacity = '1';
        }
    }

    document.getElementById('lupe').addEventListener('click', function (){
        verschiebeKreis('85px', '395px', 'lupe');
    });
    document.getElementById('lupe2').addEventListener('click', function (){
        verschiebeKreis('90px', '260px', 'lupe2');
    });
    document.getElementById('lupe3').addEventListener('click', function (){
        verschiebeKreis('155px', '160px', 'lupe3');
    });


    let intervalId;
    let posX = 395;
    let posY = 85;

    function startAnimation()
    {
        intervalId = setInterval(bewegeKreis, 40);
        kreis.style.visibility = 'visible';
    }

    function bewegeKreis()
    {
        kreis.style.left = posX + 'px';
        kreis.style.top = posY + 'px';

        posX-=2;

        if (posX < 260)
        {
            if (posY < 156)
            {
                posY+=2;
            }
        }

        if (posX < 160)
        {
            clearInterval(intervalId);
            kreis.style.visibility = 'hidden';
            posX = 395;
            posY = 85;
        }

    }

    document.getElementById('animation').addEventListener('click', function () {
        startAnimation();
    })

    let meldung = document.getElementById('meldung');

    function zeigeMeldung()
    {
        meldung.style.visibility = 'visible';
        meldung.style.left = (window.innerWidth-365)/2 + 'px';
        meldung.style.top = window.innerHeight/2-70 + 'px';
    }

    function schliesseMeldung()
    {
        meldung.style.visibility = 'hidden';
    }

    setTimeout(zeigeMeldung, 1000);
    addEventListener("resize", zeigeMeldung)
    document.getElementById('close').addEventListener('click', function () {
        schliesseMeldung();
    })
    document.getElementById('closebutton').addEventListener('click', function () {
        schliesseMeldung();
    })

}

document.addEventListener("DOMContentLoaded", init);
