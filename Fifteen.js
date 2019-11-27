var totalMoves = 0;
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
                solved();
                return;
            }
        }
        if (column > 1) {
            if (document.getElementById("cell" + row + (column-1)).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + row + (column-1));
                solved();
                return;
            }
        }
        if (row > 1){
            if (document.getElementById("cell" + (row-1) + column).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + (row-1) + column);
                solved();
                return;
            }
        }
        if (row < 4) {
            if (document.getElementById("cell" + (row+1) + column).className === "tile16") {
                swapTiles("cell" + row + column, "cell" + (row+1) + column);
                solved();
                return;
            }
        }
    }
}
function PlayerMove(row, column) {
    clickTile(row, column);
    totalMoves++;
}
function shuffleBruteForce() {
    ResetYouWon();
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
function solved() {
    const array = {cell11: "tile1", cell12: "tile2", cell13: "tile3", cell14: "tile4", cell21: "tile5", cell22: "tile6",
    cell23: "tile7", cell24:"tile8", cell31: "tile9", cell32: "tile10", cell33: "tile11", cell34: "tile12", cell41: "tile13",
    cell42: "tile14", cell43: "tile15", cell44: "tile16"};
    var boolean = 0;
    for (var i=1; i<=4; i++){
        for (var j=1; j<=4; j++) {
            let tile = document.getElementById("cell" + i + j).classList;
            let cell = "cell" + i + j;
            if (array[cell] === tile[0]) {
                boolean = 1;
            }
            else{
                boolean = 0;
                break;
            }
        }
        if (boolean === 0){break;}
    }
    if (boolean === 1){YouWon();}
}
function YouWon(){
    document.getElementById('youwin').style.display = 'block';
}
function ResetYouWon() {
    document.getElementById('youwin').style.display = 'none';
}