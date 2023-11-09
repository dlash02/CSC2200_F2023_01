let GameBoard = {
    myBoard:
        [
            [null, 'SS:3', 'S', 'S', "BB:2", null, null, 'BB:1', null, null],
            [null, 'SS:5', 'S', 'S', 'S', 'S', null, null, null, null],
            // [null, 'SS:2', "S", 'BB:1', null, 'BB:1', null, null, null, null],
            // [null, 'B:1', null, 'SS:3', 'S', 'S', null, null, null, null],
            // [null, null, null, null, null, 'BB:1', null, null, null, null],
            // [null, null, 'BB:2', null, "BB:2", null, null, null, null, null],
            // [null, null, "BB:2", null, "BB:2", null, null, "BB:2", null, null],
            // [null, null, null, null, "BB:1", null, "SS:3", "S", "S", null],
            // [null, null, "SS:4", "S", "S", "S", null, null, null, null],
            // [null, "SS:5", "S", "S", "S", "S", null, null, null, null]
        ],
        token1 :{
                icon : '<i class="fas fa-heart" style="font-size:18px;color:red;margin-left: 5px">',
                row : 0,
                col : 0
        },
        token2 :{
                icon : '<i class="fas fa-dragon" style="font-size:18px;color:blue;margin-left: 5px"></i>',
                row : 0,
                col : 0
        },
        bomb :{
                icon : '<i class="fas fa-bomb" style="font-size:18px;color:orangered;margin-left: 5px"></i>',
                row : 0,
                col : 0
        },
        forward :{
                icon : '<i class="fas fa-solid fa-forward" style="font-size:12px;color:black;margin-left: 1px;font-weight: 900"></i>',
                row : 0,
                col : 0
        },
        forwardStart : {
                icon : '<i class="fas fa-solid fa-forward" style="font-size:14px;color:green;margin-left: 1px;font-weight: 900"></i>',
        },
        reset : function(  ) {
                this.token2.col = 0
                this.token1.col = 0
                this.token1.row = 0
                this.token2.row = 0
        },
        gotToken : function( r, c ){
                let retStr = "";
                if ( this.token1.row == r && this.token1.col == c){
                        retStr = this.token1.icon;
                }
                if ( this.token2.row == r && this.token2.col == c){
                        retStr += this.token2.icon;
                }
                let boardElement = this.myBoard[r][c];
                if ( boardElement != null && boardElement.substring(0,2) === "SS"){
                        retStr += this.forwardStart.icon;
                }
                if ( boardElement === "S"){
                        retStr += this.forward.icon;
                }
                if ( boardElement != null && boardElement.substring(0,2) === "BB"){
                        retStr += this.bomb.icon;
                }
                return retStr;
        }
}
let Game = {
        gameState : 'User',
        move : function (){
                let die = DiceRoll.rollEm();
                UI.showDie( die );

                if ( this.gameState == 'User'){
                        this.moveToken( GameBoard.token1, die);
                        if ( Game.gameOver( GameBoard.token1)){
                                GameBoard.token1.col = 9;
                                GameBoard.token1.row = 9
                                UI.gameWinner( GameBoard.token1);
                                // The game is over
                        }
                        document.getElementById('btn1').innerHTML = "Computer Turn";
                        this.gameState = 'Computer';
                } else {
                        this.moveToken( GameBoard.token2, die);
                        if ( Game.gameOver( GameBoard.token2)){
                                GameBoard.token2.col = 9;
                                GameBoard.token2.row = 9
                                UI.gameWinner( GameBoard.token2);
                                // The game is over
                        }
                        document.getElementById('btn1').innerHTML = "User Turn";
                        this.gameState = 'User';
                }
                UI.showBoard(GameBoard.myBoard);
        },
        moveToken : function( tok, die ){
                let v = die.value;
                // v = 1;
                let col = tok.col;
                let row = tok.row;
                let rowLengthMinus1 = GameBoard.myBoard[row].length-1;
                if ( (col+v) > rowLengthMinus1){
                        // does not fit
                        tok.row += 1;
                        let spacesLeft = rowLengthMinus1 - col;
                        let rollLeft = v - spacesLeft -1;
                        tok.col = rollLeft;
                        /*alert("move it");*/
                } else {
                        // fits on the current row
                        tok.col = col + v;
                }
                let slideSp =  this.checkForSlide( tok, tok.row, tok.col);
                if ( slideSp > 0 ){
                        alert( "SLIDING ALERT!!!!" + slideSp)
                        tok.col += parseInt(slideSp);
                        alert( "tokCol:" + tok.col)

                } else {
                        // alert( "No SLIDING ALERT!!!!" + slideSp );
                }
                let bombSp =  this.checkForBomb( tok, tok.row, tok.col);
                if ( bombSp > 0 ){
                        alert( "BOOM! spaces:" + bombSp);
                        tok.col -= bombSp;
                        alert( "tokCol:" + tok.col)

                }

        },
        checkForSlide : function( tok, row, col ){
                alert( `row:${row} col:${col} rolwL:${GameBoard.myBoard.length}`)
                let spaces = 0;
                if ( !this.gameOver( tok )){
                        let boardElement = GameBoard.myBoard[row][col];

                        if (boardElement != null && boardElement.substring(0, 2) === "SS") {
                                spaces = parseInt(boardElement.substring(3));
                        } // else {
                        //         alert( `Board:${boardElement}`)
                        // }
                }
                        return spaces;
        },
        checkForBomb : function( tok, row, col ){
                let spaces = 0;
                if ( !this.gameOver( tok )){
                        let boardElement = GameBoard.myBoard[row][col];
                        if (boardElement != null && boardElement.substring(0, 2) === "BB") {
                                spaces = parseInt(boardElement.substring(3));
                        }
                } // else {
                //         alert( `Board:${boardElement}`)
                // }
                return spaces;
        },
        gameOver : function( tok ) {
                // return true or false
                console.log( "Game Over Check");
                console.log( tok );
                let lastRow = GameBoard.myBoard.length-1;
                let gOver = false;
                if ( tok.row > lastRow ){
                        gOver = true;
                } else if ( tok.col >= GameBoard.myBoard[lastRow].length-1 && tok.row == lastRow){
                        gOver = true;
                }
                console.log( "GGover:" + gOver );
                return gOver;
        },
}
let DiceRoll = {
        dice : [
                {'img' : 'Die1.PNG', 'value' : 1},
                {'img' : 'Die2.PNG', 'value' : 2},
                {'img' : 'Die3.PNG', 'value' : 3},
                {'img' : 'Die4.PNG', 'value' : 4},
                {'img' : 'Die5.PNG', 'value' : 5},
                {'img' : 'Die6.PNG', 'value' : 6},
        ],
        rollTotal : 0,
        rollEm : function () {
                this.rollTotal = 0;
                let rand = Math.floor(Math.random() * this.dice.length);
                rand=5; //FLAG TESTING

                let die = this.dice[rand];
                return die;
        }
}
let UI = {
     showBoard : function(myBoard) {
             let tRow = " ";
             for (let r = 0; r < myBoard.length; r++) {
                     let row = myBoard[r];
                     tRow += `<tr id="R${r}">`;
                     console.log( "Row->"); console.log(row );
                     for (let c = 0; c < row.length; c++) {
                             let tokStr = GameBoard.gotToken(r, c);
                             tRow += `<td id="${r}${c}" class="square" onClick='clickSq(${tokStr})'> ${tokStr} </td>`;
                             let sq = myBoard[r][c];
                     }
                     tRow += `</tr>`;
             }
             document.getElementById("table1").innerHTML = tRow;
     },
        showDie: function (die) {
                let oStr = `<br /><img src='imgs/${die.img}' height='40px'  alt="die image"/>`;
                document.getElementById('dieRoll').innerHTML = oStr;
        },
        gameWinner : function( tok ) {
             alert("GAME WINNER")
                document.getElementById("winner").innerHTML = tok.icon + " Winner " + tok.icon;
                document.getElementById("winner").style.display = 'block';
                document.getElementById("winContainer").style.height = '100px';
                document.getElementById('btn1').style.display = 'none';
                document.getElementById('btn2').style.display = 'block';
                let elem = document.getElementById('winner');
                let id = 'winner';
                let pos = 0;
                let tPos = 0;
                const MAX_MOVES = 1000;
                let ctMoves = 0;
                clearInterval( id );
                let idx = setInterval( frame, 10);
                function frame(){
                        ctMoves += 1;
                        if ( ctMoves > MAX_MOVES ){
                                clearInterval( id );
                        } else if ( pos > 1000 ){
                                pos = 0;
                                tPos += 100;
                                elem.style.top = tPos + 'px';
                                elem.style.background = 'blue';
                        } else {
                                pos++;
                                elem.style.left = pos + 'px';
                        }
                }

        },
}
function loadGame() {
        UI.showBoard( GameBoard.myBoard );
}
function takeTurn(){
        Game.move();
}
function resetGame() {
        alert( "RESETTING")
        GameBoard.reset();

        document.getElementById('btn1').style.display = 'block';
        document.getElementById('btn2').style.display = 'none';
        UI.showBoard( GameBoard.myBoard );
}