let start = document.getElementById("start");
let left = document.getElementById("left");
let right = document.getElementById("right");
let gameOver = document.getElementById("gameOver");

start.addEventListener("click", startGame);
left.addEventListener("click", directionLeft);
right.addEventListener("click", directionRight);

let canvas = document.getElementById("game").getContext("2d");

let x;
let y;
let interval;
let points = 0;
let direction = "down";

function startGame() {

    x = 150;
    y = 150;

    start.disabled = true;
    left.disabled = false;
    right.disabled = false;

    canvas.lineJoin = "miter";
    canvas.lineWidth = 5;
    canvas.beginPath();
    canvas.moveTo(x, y);

    interval = setInterval(gameLogic, 250);
}

function directionLeft() {
    switch (direction) {
        case "down":
            direction = "right";
            break;
        case "right":
            direction = "up";
            break;
        case "up":
            direction = "left";
            break;
        case "left":
            direction = "down";
            break;
        default:
            alert("Something went Wrong");
    }
}

function directionRight() {
    switch (direction) {
        case "down":
            direction = "left";
            break;
        case "right":
            direction = "down";
            break;
        case "up":
            direction = "right";
            break;
        case "left":
            direction = "up";
            break;
        default:
            alert("Something went Wrong");
    }
}

function gameRules() {

    let color;

    switch (direction) {
        case "down":
            color = canvas.getImageData(x, y, 5, 5).data[3];
            break;
        case "up":
            color = canvas.getImageData(x, y - 2, 5, 5).data[3];
            break;
        case "right":
            color = canvas.getImageData(x, y, 5, 5).data[3];
            break;
        case "left":
            color = canvas.getImageData(x - 2, y, 5, 5).data[3];
            break;
        default:
            alert("Something went Wrong");
    }

    if (x > 300 || x < 0 || y > 300 || y < 0 || color === 255) {
        clearInterval(interval);
        interval = null;

        left.disabled = true;
        right.disabled = true;

        gameOver.style.display = "inline-block";
        gameOver.innerHTML = "<p>Game Over<br/>You earned " + points + " Points!</p>";

        start.innerText = "Neues Spiel";
        start.disabled = false;
        start.addEventListener("click", refresh);
    } else {
        document.getElementById("points").innerText = "Points: " + ++points;
    }
}

function refresh() {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    start.innerText = "Spiel Starten";
    gameOver.style.display = "none";
    startGame();
}

function gameLogic() {
    switch (direction) {
        case "down":
            y += 5;
            break;
        case "up":
            y -= 5;
            break;
        case "right":
            x += 5;
            break;
        case "left":
            x -= 5;
            break;
        default:
            alert("Something went Wrong");
    }

    canvas.lineTo(x, y);
    canvas.stroke();

    gameRules();
}
