function swapTiles (cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}
function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile !== "tile16 tile") {
        if (column < 4){
            if (document.getElementById("cell" + row + (column + 1)).className === "tile16 tile") {
                swapTiles("cell" + row + column, "cell" + row + (column+1));
                return;
            }
        }
        if (column > 1) {
            if (document.getElementById("cell" + row + (column-1)).className === "tile16 tile") {
                swapTiles("cell" + row + column, "cell" + row + (column-1));
                return;
            }
        }
        if (row > 1){
            if (document.getElementById("cell" + (row-1) + column).className === "tile16 tile") {
                swapTiles("cell" + row + column, "cell" + (row-1) + column);
                return;
            }
        }
        if (row < 4) {
            if (document.getElementById("cell" + (row+1) + column).className === "tile16 tile") {
                swapTiles("cell" + row + column, "cell" + (row+1) + column);
                return;
            }
        }
    }
}
function shuffleBruteForce() {
    for (var i=0; i < 10000; i++){
           var row = Math.floor(Math.random()*4 + 1);
           var column = Math.floor(Math.random()*4 + 1);
        clickTile(row, column);
    }
}
function image2(sheet) {
    document.getElementById('page').setAttribute('href', "./StyleSheets/" + sheet);
}
