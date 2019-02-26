document.getElementById("start").addEventListener("click", startGame);
document.getElementById("left").addEventListener("click", directionLeft);
document.getElementById("right").addEventListener("click", directionRight);


canvas = document.getElementById("game").getContext("2d");

let points = 0;
let x = 150;
let y = 150;
let interval;
let direction = "down";

function startGame() {

    canvas.lineJoin = "miter";
    canvas.lineWidth = 5;
    canvas.beginPath();
    canvas.moveTo(x, y);

    interval = setInterval(gameLogic, 300);
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
    let color = canvas.getImageData(x, y,5,5).data[3];

    console.log(color);

    if (x >= 300 || x <= 0 || y >= 300 || y <= 0) {
        clearInterval(interval);
        alert("Game Over");
        //location.reload();
    }
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

    console.log(x, y);

    document.getElementById("points").innerText = "Points: " + points++;

    gameRules();
}
