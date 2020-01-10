
document.addEventListener('keydown', function(event) {
    if(event.key.localeCompare("ArrowLeft") === 0) {
        currentPiece.x -= squareSize;
        currentPiece.movePiece();
    }
    else if(event.key.localeCompare("ArrowRight") === 0) {
        currentPiece.x += squareSize;
        currentPiece.movePiece();
    }
    else if(event.key.localeCompare("ArrowDown") === 0) {
        currentPiece.y += squareSize;
        currentPiece.movePiece();
    }
    else if(event.key.localeCompare("ArrowUp") === 0) {
        currentPiece.changePos();
        currentPiece.movePiece();
    }
    else if(event.key.localeCompare("ArrowUp") === 0) {
        currentPiece.changePos();
        currentPiece.movePiece();
    }
    else if(event.key.localeCompare("r") === 0) {
        reloadPage();
    }
    else if(event.key.localeCompare("1") === 0 && currentPiece === null) {
        currentPiece = Ipiece;
        runGame();
    }
    else if(event.key.localeCompare("2") === 0 && currentPiece === null) {
        currentPiece = Tpiece;
        runGame();
    }
    else if(event.key.localeCompare("3") === 0 && currentPiece === null) {
        currentPiece = Spiece;
        runGame();
    }
    else if(event.key.localeCompare("4") === 0 && currentPiece === null) {
        currentPiece = Zpiece;
        runGame();
    }
    else if(event.key.localeCompare("5") === 0 && currentPiece === null) {
        currentPiece = Lpiece;
        runGame();
    }
    else if(event.key.localeCompare("6") === 0 && currentPiece === null) {
        currentPiece = Jpiece;
        runGame();
    }
    else if(event.key.localeCompare("7") === 0 && currentPiece === null) {
        currentPiece = Opiece;
        runGame();
    }


});
