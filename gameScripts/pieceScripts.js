const canvas2 = document.getElementById("pieceCanvas");
const ctx2 = canvas2.getContext("2d");
let bag = [];
function refill() {
    bag = ["i", "o", "t", "s", "z", "l", "j"];
}

function takeFromBag(x) {
    var y = bag.indexOf(x);
    bag.splice(y, 1);
}
function spawnPiece() {
    if (bag.length === 0) {
        refill();
    }

    const piece = bag[Math.floor(Math.random() * bag.length)];
    takeFromBag(piece);
    if (String(piece).localeCompare("t") === 0) {
        return Tpiece;
    }
    else if (String(piece).localeCompare("o") === 0) {
        return Opiece;
    }
    else if (String(piece).localeCompare("s") === 0) {
        return Spiece;
    }
    else if (String(piece).localeCompare("z") === 0) {
        return Zpiece;
    }
    else if (String(piece).localeCompare("l") === 0) {
        return Lpiece;
    }
    else if (String(piece).localeCompare("j") === 0) {
        return Jpiece;
    }
    else {
        return Ipiece;
    }
}

const piece = function () {
    this.drawPath = [3];
    this.pos = -1;

    this.changePos =function() {
        this.pos++;
        if (this.pos === 4) {
            this.pos = 0;
        }
        this.turn();
    };

    this.movePiece = function() {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        currentPiece.drawPiece();
    };

    this.drawPiece = function () {
        drawSquare(currentPiece.x, currentPiece.y, currentPiece.color);
        for(var b = 0; b < currentPiece.drawPath.length; b++) {
            moveHorz = 0;
            moveVert = 0;
            for(var j = 0; j < currentPiece.drawPath[b].length; j++) {
                switch (currentPiece.drawPath[b].slice(j, j + 1)) {
                    case "L":
                        moveHorz -= squareSize;
                        break;
                    case "R":
                        moveHorz += squareSize;
                        break;
                    case "D":
                        moveVert += squareSize;
                        break;
                    case "U":
                        moveVert -= squareSize;
                }
            }
            drawSquare(currentPiece.x + moveHorz, currentPiece.y  + moveVert, currentPiece.color);
        }
    }
};


function drawSquare(x, y, color) {
    ctx2.fillStyle = color;
    ctx2.fillRect(x, y, squareSize, squareSize);
}

const Tpiece = new piece;
Tpiece.x = 120;
Tpiece.y = 30;
Tpiece.color = "purple";
Tpiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["L", "U", "R"];
            break;
        case 1:
            this.drawPath = ["U", "R", "D"];
            break;
        case 2:
            this.drawPath = ["L", "U", "R"];
            break;
        case 3:
            this.drawPath = ["L", "U", "D"];
            break;
    }
};

const Opiece = new piece;
Opiece.x = 150;
Opiece.y = 30;
Opiece.color = "yellow";
Opiece.turn = function() {
    this.drawPath = ["U", "L", "UL"];
    //this one doesnt turn 5head
};

const Lpiece = new piece;
Lpiece.x = 120;
Lpiece.y = 30;
Lpiece.color = "orange";
Lpiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["L", "R", "RU"];
            break;
        case 1:
            this.drawPath = ["U", "UR", "D"];
            break;
        case 2:
            this.drawPath = ["L", "LD", "R"];
            break;
        case 3:
            this.drawPath = ["U", "UR", "D"];
            break;
    }
};

const Spiece = new piece;
Spiece.x = 120;
Spiece.y = 30;
Spiece.color = "green";
Spiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["U", "UR", "L"];
            break;
        case 1:
            this.drawPath = ["R", "RD", "U"];
            break;
        case 2:
            this.drawPath = ["R", "D", "DL"];
            break;
        case 3:
            this.drawPath = ["L", "DL", "D"];
            break;
    }
};
const Zpiece = new piece;
Zpiece.x = 120;
Zpiece.y = 30;
Zpiece.color = "red";
Zpiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["U", "UL", "R"];
            break;
        case 1:
            this.drawPath = ["R", "UR", "D"];
            break;
        case 2:
            this.drawPath = ["L", "D", "DR"];
            break;
        case 3:
            this.drawPath = ["L", "LD", "U"];
            break;
    }
};
const Jpiece = new piece;
Jpiece.x = 120;
Jpiece.y = 30;
Jpiece.color = "blue";
Jpiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["L", "LU", "R"];
            break;
        case 1:
            this.drawPath = ["U", "UR", "D"];
            break;
        case 2:
            this.drawPath = ["L", "R", "RD"];
            break;
        case 3:
            this.drawPath = ["D", "DL", "U"];
            break;
    }
};
const Ipiece = new piece;
Ipiece.x = 150;
Ipiece.y = 30;
Ipiece.color = "cyan";
Ipiece.turn = function() {
    switch(this.pos) {
        case 0:
            this.drawPath = ["L", "R", "LL"];
            break;
        case 1:
            Tpiece.x -= squareSize;
            this.drawPath = ["U", "D", "DD"];
            Tpiece.x -= squareSize;
            break;
        case 2:
            Tpiece.y -= squareSize;
            this.drawPath = ["L", "R", "RR"];
            Tpiece.y += squareSize;
            break;
        case 3:
            this.drawPath = ["U", "UU", "D"];
            break;
    }
};
