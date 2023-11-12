function loadGame(){
   // alert("Game loaded");
   UI.showBoard( GameBoard );
}
function takeTurn(){
    // alert("make turn");
    let d = Dice.rollEm();
    UI.showDie(d);
}
function resetGame(){
    alert("Reset Game");
}



let Dice = {
    die : [
        { img: 'Die1.PNG', 'value' : 1, 'alt': "Die1 Image"},
        { img: 'Die2.PNG', 'value' : 2, 'alt': "Die2 Image"},
        { img: 'Die3.PNG', 'value' : 3, 'alt': "Die3 Image"},
        { img: 'Die4.PNG', 'value' : 4, 'alt': "Die4 Image"},
        { img: 'Die5.PNG', 'value' : 5, 'alt': "Die5 Image"},
        { img: 'Die6.PNG', 'value' : 6, 'alt': "Die6 Image" }
    ],
    rollTotal : 0,
    rollEm : function() {
       let rand = Math.floor( Math.random() * this.die.length);
       // rand = 5;
       let die = this.die[rand];
       return die;
    }
}
let GameBoard = {
    myBoard : [
        [ null, "SS:2", "S",  "S",  "BB:1", null, null, null, null, null ],
        [ null, null, null, "BB:3", null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  "BB:2", null, null, null, null ],
        [ "SS:3", "S", "S", "S", null,  null, null, "BB:3", null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, null, "SS:4",  "S", "S", "S", "S", null ],
        [ null, null, null, null, null,  null, null, null, null, null ],
        [ null, null, null, "BB:1", null,  null, null, null, null, null ]
    ],
    gotToken : function( r, c ){
        let ret ="";
        let boardVal = this.myBoard[r][c];
        if ( this.token1.row == r && this.token1.col == c ){
            ret += this.token1.icon;
        }
        if ( this.token2.row == r && this.token2.col == c ){
            ret += this.token2.icon;
        }
        if ( boardVal != null && boardVal.substring(0,2) === "BB"){
            ret += this.bomb.icon;
        }
        if ( boardVal != null && boardVal.substring(0,2) === "SS"){
            ret += this.slide.icon;
        }
        if ( boardVal != null && boardVal === "S"){
            ret += this.slideContinue.icon;
        }
        return ret;
    },
    bomb : {
        icon : '<i class="fas fa-bomb" style="font-size:18px;color:orangered;margin-left: 5px">'
    },
    slide : {
        icon: '<i class="fas fa-solid fa-forward" style="font-size:16px;color:green;margin-left: 1px;font-weight: 900"></i>'
    },
    slideContinue : {
        icon: '<i class="fas fa-solid fa-forward" style="font-size:12px;color:black;margin-left: 1px;font-weight: 900"></i>'
    },
    token1 : {
        icon: '<i class="fas fa-solid fa-ghost" style="font-size:18px;color:darkgreen;margin-left: 1px;font-weight: 900"></i>',
        row: 0,
        col: 0
    },
    token2 : {
        icon: '<i class="fas fa-dragon" style="font-size:18px;color:blue;margin-left: 5px;font-weight: 900"></i>',
        row: 0,
        col: 0
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
    },
    showDie: function( die ) {
        let obj = document.getElementById("dieRoll");
        let img = `<img src='imgs/${die.img}' alt=${die.alt}/> `;
        obj.innerHTML = img;
    }
}