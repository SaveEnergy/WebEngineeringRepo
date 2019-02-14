'use strict';

/* durch init() kann <script> an beliebhiger Stelle eingebaut werden */
function init()
{	
	console.log("DOM geladen!");
	document.getElementById("bild1").addEventListener("mouseover", function(e) { tauscheBild(e); });
    document.getElementById("bild1").addEventListener("mouseout", function(e) { tauscheBild(e); });
    //document.getElementById("bild1").addEventListener("click",tauscheBild);
    document.getElementById("bild1").addEventListener("click", function(e) { tauscheBild(e); } );
    //document.getElementById("lupe1").addEventListener("click",zeigeKreis);
    document.getElementById("lupe1").addEventListener("click", function(e) { zeigeKreis(400,90,e.target.id); } )
    document.getElementById("lupe2").addEventListener("click", function(e) { zeigeKreis(260,90,e.target.id); } )
    document.getElementById("lupe3").addEventListener("click", function(e) { zeigeKreis(160,140,e.target.id); } )
    document.getElementById("aniKnopf").addEventListener("click", starteAnimation);
    window.addEventListener("resize", zeigeMeldung);
    document.getElementById("nein").addEventListener("click", versteckeMeldung);
    document.getElementById("schliessen").addEventListener("click", versteckeMeldung);
    document.getElementById("maximieren").addEventListener("click", maxMeldung);


    setTimeout(zeigeMeldung, 1000);
}
document.addEventListener("DOMContentLoaded", init);

let intervalId;
let posX=400;
let posY=90;

function maxMeldung()
{
    document.getElementById("meldung").style.top="10px";
    document.getElementById("meldung").style.left="10px";
    document.getElementById("meldung").style.height="100%";
    //document.getElementById("meldung").style.width="100%";
}

function zeigeMeldung()
{
    //alert("Test!");
    
    //TODO 1. Größe des Screens auslesen
    let bildschirmX=window.innerWidth;
    let bildschirmY=window.innerHeight;
    //console.log("Größe:" + bildschirmX + " x " + bildschirmY );
    
    //let breite=120;
    let breite=document.getElementById("meldung").offsetWidth;
    let hoehe=document.getElementById("meldung").offsetHeight;
    //let hoehe=document.getElementById("meldung").offsetLeft;
    console.log("Breite: " + breite);
    console.log("Höhe: " + hoehe);

    //2. genaue Position in der Mitte berechnen
    let positionX=(bildschirmX-breite)/2;
    let positionY=(bildschirmY-hoehe)/2;
    
    //3. genau in die Mitte schieben mit .top und .left
    document.getElementById("meldung").style.top=positionY + "px";
    document.getElementById("meldung").style.left=positionX + "px";
    document.getElementById("meldung").style.visibility="visible";
}

function versteckeMeldung()
{
    document.getElementById("meldung").style.visibility="hidden";
}


function starteAnimation()
{
    //alert("Test!");
    intervalId = setInterval(bewegeKreis, 50);
    document.getElementById("kreis").style.visibility="visible";
    //document.getElementById("aniKnopf").setAttribute("disabled","disabled");
    document.getElementById("aniKnopf").disabled=true;
}

function bewegeKreis()
{
    //Kaffeepause bis 14:35 Uhr
    //--------------------------
    //Kreis bewegen mit top / left Änderung
    let k= document.getElementById("kreis");
    posX-=2;
    //console.log("PosX:" + posX + " PosY:" + posY);
    if (posX<250)
    {
        posY+=2;
    }
    if (posY>160)
    {
        clearInterval(intervalId);
        alert("Fertig!");
        document.getElementById("aniKnopf").disabled=false;
        posX=400;
        posY=90;
    }
    k.style.top=posY + "px";
    k.style.left=posX + "px";
}

function tauscheBild(e)
{
    //alert(e.target.id);
    //alert(e.type);
    console.log(e.type);

    let p=document.getElementById("bild1");

    if (p.getAttribute("src")=="img/notstromaggregat-rueckseite.jpg")
    {
        p.setAttribute("src","img/notstromaggregat.jpg")
    }
    else
    {
        document.getElementById("kreis").style.visibility="hidden";
        document.getElementById("lupe1").style.opacity="1";
        p.setAttribute("src","img/notstromaggregat-rueckseite.jpg")
    }   

    if (e.type=="click")
    {
        alert("Bitte erneut auf das Bild klicken um dies zu wechseln!");
    }

}

function zeigePreis()
{
    //alert("Test2!");
    let p=document.getElementById("preis");
    // let p=document
    //         .getElementById("preisbereich")
    //         .childNodes[1];
    p.style.color="red";
    p.style.fontSize="30px";
    p.style.backgroundColor="yellow";
}

function aenderePreis()
{
    let preis=document.getElementById("preis").textContent;

    if (document.getElementById("knopf").innerHTML=="zeige Nettopreis")
    {
        let nettopreis=preis/1.19;
        document.getElementById("preis").textContent=nettopreis.toFixed(2);
        document.getElementById("mwst").innerHTML="zzgl. Mwst.";
        document.getElementById("knopf").innerHTML="zeige Bruttopreis";
    }
    else
    {
        let bruttopreis=preis*1.19;
        document.getElementById("preis").textContent=bruttopreis.toFixed(2);
        document.getElementById("mwst").innerHTML="inkl. Mwst.";
        document.getElementById("knopf").innerHTML="zeige Nettopreis"; 
    }

}

function zeigeKreis(x,y,lupe)
{
    
    let k=document.getElementById("kreis");

    k.style.top=y + "px";
    k.style.left=x + "px";

    document.getElementById("lupe1").style.opacity="1"
    document.getElementById("lupe2").style.opacity="1"
    document.getElementById("lupe3").style.opacity="1"
    
    if (k.style.visibility=="visible")
    {
        k.style.visibility="hidden";     
    }
    else
    {
        k.style.visibility="visible";
        //richtige Lupe ausgrauen
        document.getElementById(lupe).style.opacity="0.3";
    }


}

