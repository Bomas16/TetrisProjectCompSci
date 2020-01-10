
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
});
