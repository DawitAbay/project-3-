function swapTiles (cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}
function clickTile(row, column) {
    const cell = document.getElementById("cell" + row + column);
    const tile = cell.className;
    if (tile !== "tile16") {
        if (column < 4){
            if (document.getElementById("cell" + row + (column + 1)).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column+1));
                return;
            }
        }
        if (column > 1) {
            if (document.getElementById("cell" + row + (column-1)).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column-1));
                return;
            }
        }
        if (row > 1){
            if (document.getElementById("cell" + (row-1) + column).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + (row-1) + column);
                return;
            }
        }
        if (row < 4) {
            if (document.getElementById("cell" + (row+1) + column).className === "tile16") {
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
function chooseImage(sheet) {
    document.getElementById('page').setAttribute('href', "./StyleSheets/" + sheet);
}
function chooseImageRandom() {
    const Mario = "FifteenStyle.css";
    const Luigi = "Image2.css";
    const Mushroom = "Image3.css";
    const BulletBill = "Image4.css";
    const Bowser = "Image5.css";
    var num = Math.floor(Math.random()*5 + 1);
    if (num === 1){document.getElementById('page').setAttribute('href', "./StyleSheets/" + Mario);}
    if (num === 2){document.getElementById('page').setAttribute('href', "./StyleSheets/" + Luigi);}
    if (num === 3){document.getElementById('page').setAttribute('href', "./StyleSheets/" + Mushroom);}
    if (num === 4){document.getElementById('page').setAttribute('href', "./StyleSheets/" + BulletBill);}
    if (num === 5){document.getElementById('page').setAttribute('href', "./StyleSheets/" + Bowser);}
}