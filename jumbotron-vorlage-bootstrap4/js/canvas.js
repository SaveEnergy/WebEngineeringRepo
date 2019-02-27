let canvas = document.getElementById("canvas").getContext("2d");
let start = document.getElementById("start");
let kurs = document.getElementById("kurs");
let buy = document.getElementById("buy");
let sell = document.getElementById("sell");
let aktien = document.getElementById("aktien");
let konto = document.getElementById("konto");
let rest = document.getElementById("rest");

start.addEventListener("click", startGame);
buy.addEventListener("click", buyAktie);
sell.addEventListener("click", sellAktie);

let kontoStand = 10000;
let aktienStand = 0;
let interval;
let step = 5;
let x = 0;
let y = Math.floor(Math.random() * canvas.canvas.height);

function startGame() {
    interval = setInterval(gameLogic, 1000);

    canvas.lineJoin = "miter";
    canvas.beginPath();
    canvas.moveTo(x, y);
}

function buyAktie() {
    if (kontoStand > 0) {
        kontoStand -= canvas.canvas.height - y;
        aktienStand++;
    }
}

function sellAktie() {
    if (aktienStand > 0) {
        kontoStand += canvas.canvas.height - y;
        aktienStand--;
    }
}

function gameLogic() {
    x += step;
    y += Math.floor(Math.random() * canvas.canvas.height) % step ? step : -step;
    canvas.lineTo(x , y);
    console.log(x, y);
    canvas.stroke();

    kurs.innerText = canvas.canvas.height - y;
    rest.innerText = (canvas.canvas.width - x) / step;

    konto.innerText = kontoStand;
    aktien.innerText = aktienStand;


    if (x > canvas.canvas.width) {
        clearInterval(interval);
    }
}



