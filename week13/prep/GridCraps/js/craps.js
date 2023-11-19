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
        // rand = 0;  // FLAG FOR TESTING
        let die = this.die[rand];
        return die;
    }
}
let User = {
    name: "",
    bet: 0,
    winnings: 0,
    rolls: 0,
    pointToMake : 0
}
let Game = {
    COME_OUT_WIN_TOTAL: [7, 11],
    COME_OUT_LOSS_TOTAL: [2, 3, 12],
    POINT_ROLL_LOSS: 7,
    winnerOnComeOut: function (rollTotal) {
        for( let i=0; i<this.COME_OUT_WIN_TOTAL.length; i++){
            if ( this.COME_OUT_WIN_TOTAL[i] == rollTotal ){
                return true;
            }
        }
        return false
    },
    loserOnComeOut: function (rollTotal) {
        for( let i=0; i<this.COME_OUT_LOSS_TOTAL.length; i++ ){
            if ( this.COME_OUT_LOSS_TOTAL[i] == rollTotal ){
                return true;
            }
        }
        return false;
    },
    winnerOnPoint :  function( rollTotal, ptToMake ){
        if ( rollTotal == ptToMake ) {
            return true;
        }
            return false;
    },
    loserOnPoint :  function( rollTotal, ptToMake ){
        const LOSER_ON_PT = 7;
        if ( rollTotal == LOSER_ON_PT ) {
            return true;
        }
        return false;
    }
}
let UI  =  {
    REVEAL_DELAY : 2000,
    setBet : function( betId, betDisId){
        let errorMsg = "";
        let gotError = false;
        User.bet = parseInt(document.getElementById( betId ).value);
        if ( User.bet <= 0 || isNaN( User.bet/2 ) || User.bet == undefined || User.bet == null ){
            errorMsg = `<span style='color:red'> Illegal Bet: ${User.bet} </span>`;
            gotError = true;
        } else {
            errorMsg = `<span style='color:Blue'>  Bet: ${User.bet} </span>`;
        }
        console.log( `FLG0:${User.bet}`);
        document.getElementById( betDisId ).innerHTML = errorMsg;
        return gotError;
    },
    setName : function( nameId, nameErrorId ) {
        let nObj = document.getElementById(nameId );
        let errMsg = "";
        if ( nObj.value ){
            User.name = nObj.value;
            alert(`Setting mame:${User.name}`)
        } else {
            errMsg = "Error name is required";
            document.getElementById(nameErrorId).innerHTML = `<span style='color:red'> ${errMsg} </span>`;
        }
        return errMsg;
    },
    showDie: function (d1, d2 ){
        document.getElementById('rolling').style.display = "block";
        let id  = null;
        let rollTotal = d1.value + d2.value;
        document.getElementById('dice').innerHTML = "";
        id = setTimeout(function () {
            document.getElementById('rolling').style.display = "none";
            document.getElementById('dice').style.display = "block"

                let oStr = `<h2> ${User.name} Roll Total: ${rollTotal} </h2>`
                oStr += `<img src='imgs/${d1.img}' height='100' alt="d1" />`
                oStr += `<img src='imgs/${d2.img}' height='100px' alt="d2" />`
                console.log("FL1:" + oStr);
                document.getElementById('dice').innerHTML = oStr;

        }, this.REVEAL_DELAY);
    },
    showWinner(dieTotal) {
        let id  = null;
        id = setTimeout(function () {
            let oStr = "<img src='imgs/winner.png' height='100'  alt='Winner Image' />";
            oStr += `<br /> <span style='color:blue' > Winner: ${dieTotal} </span>`;

            document.getElementById("rightStatus").innerHTML = oStr;
        }, this.REVEAL_DELAY )
    },
    showNoWinner(dieTotal) {
        let id = null;
        id = setTimeout(function () {
            document.getElementById("rightStatus").innerHTML = "No Winner, roll to Make Pts:" + dieTotal;
        }, this.REVEAL_DELAY)
    },
    showLoser(dieTotal) {
        let id = null;
        id = setTimeout(function () {
            let oStr = "<img src='imgs/loser.PNG' height='100'  alt='Loser Image' />";
            oStr += `<br /> <span style='color:blue' > Loser: ${dieTotal} </span>`;
            document.getElementById("rightStatus").innerHTML = oStr;
        }, this.REVEAL_DELAY)
    },
    updateTotals() {
        let id = null;
        id = setTimeout(function () {
            let oStr = "<table id='table1'>"
            oStr += "<tr><th> User </th><th>Bet</th><th> Winnings </th><th>Rolls</th></tr>"
            oStr += `<tr><td> ${User.name} </td><td> ${User.bet} </td><td>${User.winnings}</td><td>${User.rolls}</td></tr>`;
            oStr += "</table>";
            document.getElementById("rightTotals").innerHTML = oStr;
        }, this.REVEAL_DELAY)
    },
    showRollToMakePtButtons()  {
        let id = null;
        id = setTimeout(function () {
            document.getElementById("initialLeftName").style.display = 'None';
            document.getElementById("initialLeftBet").style.display = 'None';
            document.getElementById("makePtButton").style.display = 'Block';
        }, this.REVEAL_DELAY)
    },
    showStartAgainButtons( userName )  {
        let id = null;
        id = setTimeout(function () {
            document.getElementById("initialLeftName").style.display = 'Block';
            let  disp = `Name: ${userName} <input type='hidden' id='inName' value='${userName}' />`
            document.getElementById("initialLeftName").innerHTML =  disp;

            document.getElementById("initialLeftBet").style.display = 'Block';
            document.getElementById("makePtButton").style.display = 'None';
        }, this.REVEAL_DELAY)
    }

}
function startFromScratch() {
     if ( UI.setName('inName', 'nameErr') == ""  && UI.setBet('bet', 'betErr') == ""){
            Game.state = "Roll For Point";
             let d1 = Dice.rollEm();
             let d2 = Dice.rollEm();
             UI.showDie( d1, d2);
            User.pointToMake = d1.value + d2.value;
            User.rolls += 1;
            if (Game.winnerOnComeOut( User.pointToMake)){
                // show Winner
                UI.showWinner( User.pointToMake );
                User.winnings += User.bet;
                UI.updateTotals();
                UI.showStartAgainButtons( User.name );
            } else if ( Game.loserOnComeOut(User.pointToMake)){
                //show Loser
                UI.showLoser( User.pointToMake );
                User.winnings -= User.bet;
                UI.updateTotals();
                UI.showStartAgainButtons( User.name );
            } else {
                UI.showNoWinner(User.pointToMake);
                UI.updateTotals();
                UI.showRollToMakePtButtons();
            }
     }
}
function makeThePt() {
        let doneRolling = false;
        while (!doneRolling) {
            let d1 = Dice.rollEm();
            let d2 = Dice.rollEm();
            let dieTotal = d1.value + d2.value;
            UI.showDie(d1, d2);

            if ( Game.loserOnPoint( ) ) {
                User.winnings -= User.bet;
                UI.updateTotals();
                UI.showLoser(dieTotal);
                doneRolling = true;
            } else if ( Game.winnerOnPoint( dieTotal, User.pointToMake ) ) {
                User.winnings += User.bet;
                UI.updateTotals();
                UI.showWinner(dieTotal);
                doneRolling = true;
            } else {
                UI.showNoWinner(dieTotal);
            }
        }
        UI.showStartAgainButtons( User.name );
    }

