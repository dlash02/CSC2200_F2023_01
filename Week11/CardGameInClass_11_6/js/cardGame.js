let deck = {
    cards: [
        {'img': '2C.png', 'value': 2, suit: 'clubs', 'dealt': false},
        {'img': '2H.png', 'value': 2, suit: 'hearts', 'dealt': false},
        {'img': '2D.png', 'value': 2, suit: 'diamonds', 'dealt': false},
        {'img': '2S.png', 'value': 2, suit: 'spades', 'dealt': false},

        {'img': '3C.png', 'value': 3, suit: 'clubs', 'dealt': false},
        {'img': '3H.png', 'value': 3, suit: 'hearts', 'dealt': false},
        {'img': '3D.png', 'value': 3, suit: 'diamonds', 'dealt': false},
        {'img': '3S.png', 'value': 3, suit: 'spades', 'dealt': false},

        {'img': '4S.png', 'value': 4, suit: 'spades', 'dealt': false},
        {'img': '4H.png', 'value': 4, suit: 'hearts', 'dealt': false},
        {'img': '4D.png', 'value': 4, suit: 'diamonds', 'dealt': false},
        {'img': '4C.png', 'value': 4, suit: 'clubs', 'dealt': false},

        {'img': '5S.png', 'value': 5, suit: 'spades', 'dealt': false},
        {'img': '5H.png', 'value': 5, suit: 'hearts', 'dealt': false},
        {'img': '5D.png', 'value': 5, suit: 'diamonds', 'dealt': false},
        {'img': '5C.png', 'value': 5, suit: 'clubs', 'dealt': false},

        {'img': '6S.png', 'value': 6, suit: 'spades', 'dealt': false},
        {'img': '6H.png', 'value': 6, suit: 'hearts', 'dealt': false},
        {'img': '6D.png', 'value': 6, suit: 'diamonds', 'dealt': false},
        {'img': '6C.png', 'value': 6, suit: 'clubs', 'dealt': false},
        // //
        {'img': '7S.png', 'value': 7, suit: 'spades', 'dealt': false},
        {'img': '7H.png', 'value': 7, suit: 'hearts', 'dealt': false},
        {'img': '7D.png', 'value': 7, suit: 'diamonds', 'dealt': false},
        {'img': '7C.png', 'value': 7, suit: 'clubs', 'dealt': false},

        {'img': '8S.png', 'value': 8, suit: 'spades', 'dealt': false},
        {'img': '8H.png', 'value': 8, suit: 'hearts', 'dealt': false},
        {'img': '8D.png', 'value': 8, suit: 'diamonds', 'dealt': false},
        {'img': '8C.png', 'value': 8, suit: 'clubs', 'dealt': false},

        {'img': '9S.png', 'value': 9, suit: 'spades', 'dealt': false},
        {'img': '9H.png', 'value': 9, suit: 'hearts', 'dealt': false},
        {'img': '9D.png', 'value': 9, suit: 'diamonds', 'dealt': false},
        {'img': '9C.png', 'value': 9, suit: 'clubs', 'dealt': false}
    ],
    dealtCards : 0,
    getCard : function( ){
        let gotGoodCard = false;
        while ( !gotGoodCard){
            let rNum = Math.floor( Math.random() * deck.cards.length );
            let card = deck.cards[rNum];
            console.log( `rNum:${rNum}`);
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCards += 1;
                return deck.cards[rNum];
            } else if ( this.dealtCards == deck.cards.length ){
                //ToDo: Fix this
                alert( `Time to reshuffle deatlcards=${this.dealtCards}` );
                return null;
            }
        }
        return card;
    }
};
let UI = {
    setBet : function( betId, betDisId){
        let errorMsg = "";
        let gotError = false;
        let bet = document.getElementById( betId ).value;
        if ( bet <= 0 || isNaN( bet/2 ) || bet == undefined || bet == null ){
            errorMsg = `<span style='color:red'> Illegal Bet: ${bet} </span>`;
            gotError = true;
        } else {
            errorMsg = `<span style='color:Blue'>  Bet: ${bet} </span>`;
        }
        // User.bet = bet;
        document.getElementById( betDisId).innerHTML = errorMsg;
        // let ret = {
        //     bet : bet,
        //     error : gotError
        // }
        // // return ret;
        return  {
            bet : bet,
            error : gotError
        }
    },
    displayHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
    },
    displayResult( id, msg ){
        document.getElementById(id).innerHTML = msg;
    }
 }
 let User = {
    hand: [],
     total: 0,
     bet: 0,
     winnings: 0
}
let CardGame = {
    Payouts : new Map ( [
       ['2OfKind', 1.25 ],
       ['3OfKind', 1.5 ],
    ]),
    NumCards: 5,
    checkHandForWinner( hand ){
        // let winType = 'None';
        let ret = {
            PayOut: 0,
            WinType: 'None'
        }
        if ( CardGame.gotPair( User.hand )){
            ret.WinType = '2OfKind';
            ret.PayOut = this.Payouts.get( ret.WinType );
        }
        if( CardGame.got3OfKind( User.hand )) {
            ret.WinType = '3OfKind';
            ret.PayOut = this.Payouts.get( ret.WinType );
        }
        return ret;
    },
    setHand : function() {
        let hand = [];
        for( let i=0; i<this.NumCards; i++){
            hand.push( deck.getCard() )
        }
        return hand;
    },
    gotPair : function( hand ) {
        let valueHash = new Map();
        for( let i=0; i<hand.length; i++ ){
            let cVal = hand[i].value;
            console.log( `card:${cVal}`);
            if ( valueHash.get( cVal ) == undefined){
                valueHash.set( cVal, 1);
            } else {
                return true;
            }
        }
        return false;
    },
    got3OfKind : function ( hand ){
        let valueHash = new Map();
        for( let i=0; i<hand.length; i++ ){
            let cVal = hand[i].value;
            console.log( `card:${cVal}`);
            if ( valueHash.get( cVal ) == undefined){
                valueHash.set( cVal, 1);
            } else if ( valueHash.get( cVal) == 2) {
                return true;
            } else {
                let eVal = valueHash.get( cVal );
                valueHash.set( cVal, ( eVal + 1));
                // valueHash.set( cVal, (valueHash.get( cVal ) + 1));
            }
        }
        return false;
    }
}

function startGame() {
    User.hand = [];
     let r = UI.setBet( "uBet", "Results");
    if (   !r.error ) {
        User.bet = r.bet;
        User.hand = CardGame.setHand();
        let id = "Cards"
        UI.displayHand( User.hand, id );
        let winnerRes = CardGame.checkHandForWinner(User.hand);
        let msg = "";
        if ( winnerRes.WinType == 'None'){
            msg = `<span style='color:red'> Loser `;
            User.winnings -= User.bet;
        } else {
            msg = `<span style='color:blue'> Winner Type:${winnerRes.WinType} `;
            User.winnings += User.bet*winnerRes.PayOut;
        }
        msg += ` Bet: ${User.bet}  Winnerings:${User.winnings} </span>`;
        UI.displayResult( 'Results', msg );
    }
}