function loadGame(){
   alert("Game loaded");
   UI.showBoard( GameBoard );
}
function takeTurn(){
    alert("make turn");

}
function resetGame(){
    alert("Reset Game");
}
let GameBoard = {
    myBoard : [
        [ null, null, null, null, null,  "BB:1", null, null, null, null ],
        [ null, null, null, "BB:3", null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  "BB:2", null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ]
    ],
    gotToken : function( r, c ){
        let ret ="";
        let boardVal = this.myBoard[r][c];
        if ( boardVal != null && boardVal.substring(0,2) === "BB"){
            return this.bomb.icon;
        }
        return ret;
    },
    bomb : {
        icon : '<i class="fas fa-bomb" style="font-size:18px;color:orangered;margin-left: 5px">'
    },
    slide : {
        icon: ''
    }
}
let UI = {
    showBoard : function ( GB ){
        let tRow = "";
        for ( let i=0; i<GB.myBoard.length; i++ ){
            let row = GB.myBoard[i];
            tRow += `<tr id="R${i}">`;
            // Left Off
            for ( let j=0; j<row.length; j++ ){
                let tok = GB.gotToken(i,j);
                tRow += `<td id="${i}${j}" class='square' > ${i}${j} ${tok} </td>`;
            }
            tRow += "</tr>";
        }
        document.getElementById("table1").innerHTML = tRow;
    }
}