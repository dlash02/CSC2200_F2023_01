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
        {'img': '9C.png', 'value': 9, suit: 'clubs', 'dealt': false},

        {'img': '10S.png', 'value': 10, suit: 'spades', 'dealt': false},
        {'img': '10H.png', 'value': 10, suit: 'hearts', 'dealt': false},
        {'img': '10D.png', 'value': 10, suit: 'diamonds', 'dealt': false},
        {'img': '10C.png', 'value': 10, suit: 'clubs', 'dealt': false},

        {'img': 'JS.png', 'value': 11, suit: 'spades', 'dealt': false},
        {'img': 'JH.png', 'value': 11, suit: 'hearts', 'dealt': false},
        {'img': 'JD.png', 'value': 11, suit: 'diamonds', 'dealt': false},
        {'img': 'JC.png', 'value': 11, suit: 'clubs', 'dealt': false},

        {'img': 'QS.png', 'value': 12, suit: 'spades', 'dealt': false},
        {'img': 'QH.png', 'value': 12, suit: 'hearts', 'dealt': false},
        {'img': 'QD.png', 'value': 12, suit: 'diamonds', 'dealt': false},
        {'img': 'QC.png', 'value': 12, suit: 'clubs', 'dealt': false},

        {'img': 'KS.png', 'value': 13, suit: 'spades', 'dealt': false},
        {'img': 'KH.png', 'value': 13, suit: 'hearts', 'dealt': false},
        {'img': 'KD.png', 'value': 13, suit: 'diamonds', 'dealt': false},
        {'img': 'KC.png', 'value': 13, suit: 'clubs', 'dealt': false},

        {'img': 'AS.png', 'value': 14, suit: 'spades', 'dealt': false},
        {'img': 'AH.png', 'value': 14, suit: 'hearts', 'dealt': false},
        {'img': 'AD.png', 'value': 14, suit: 'diamonds', 'dealt': false},
        {'img': 'AC.png', 'value': 14, suit: 'clubs', 'dealt': false}
    ],
    dealtCards : 0,
    // disCards : new Map(), // doesnot work
    getCard : function(  hand ){
        let gotGoodCard = false;
        let card = null
        while ( !gotGoodCard ){
            let rNum = Math.floor( Math.random() * deck.cards.length );
            card = deck.cards[rNum];
            console.log( `rNum:${rNum}`);
            console.log( "looping hand->"); console.log( hand );
            console.log( "looping deck->"); console.log( deck.cards );
            if ( !card.dealt ){
                card.dealt = true;
                // this.dealtCards.set( card.img, card);   // does not work
                this.dealtCards += 1;
                console.log( "RETURNDeck->"); console.log( this.cards );
                console.log( "RETURN-> Card="); console.log( card );
                return card;
            } else if ( this.dealtCards == deck.cards.length ){
                //ToDo: Fix this
                alert( `Time to reshuffle deatlcards=${this.dealtCards}` );
                this.dealtCards = 0;
                for( let i=0; i<this.cards.length; i++ ){
                    this.cards[i].dealt = false;
                    if ( this.inTheHand( hand, this.cards[i])){
                        this.cards[i].dealt = true;
                        this.dealtCards += 1;
                    }
                }
                alert( `DOne -> dealtCards=${this.dealtCards} `);
                console.log( "Deck->"); console.log( this.cards );
                // Dont return ... just let it get the next card
                // return null;
            }
        }
        console.log( "NUL-> Card="); console.log( card );
        console.log( "NULLDeck->"); console.log( this.cards );

        return card;
    },
    inTheHand : function(  hand, card ) {
        for( let i=0; i<hand.length; i++ ){
            if ( hand[i].img == card.img ){
                return true;
            }
        }
        return false;
    }
};
let UI = {
    setBet : function( betId, betDisId){
        let errorMsg = "";
        let gotError = false;
        User.bet = document.getElementById( betId ).value;
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
    displayHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
    },
    displayResult : function ( id, msg ){
        let obj = document.getElementById( id );
        obj.innerHTML = msg;
    }
 }
 let User = {
    hand: [],
     totalWins: 0,
     bet: 0,
     winnings: 0,
     attempts: 0,
     setWinnings : function ( payOutMult, winner ) {
        console.log(`setWinngins bet:${this.bet}`);
        if ( winner ){
            this.winnings += payOutMult*this.bet;
            if ( winner ) this.totalWins += 1;
        } else {
            this.winnings -= this.bet;
        }
        this.attempts += 1;
     }
}
let CardGame = {
    PayOuts :  new Map( [
        ['2OfKind', 1.25],
        ['3OfKind', 1.5],
    ]),
    NumCards: 5,
    setHand : function() {
        let hand = [];
        for( let i=0; i<this.NumCards; i++){
            hand.push( deck.getCard( hand ) );  // could give it hand ...
                                               // but this doesn't help if there are > 1 hands
        }
        console.log( "RETHAND->"); console.log( hand );
        return hand;
    },
    checkHandForWinner : function( hand ){
        let ret = {
            PayOuts: 0,
            WinType: 'None'
        }
        if ( this.gotPair(hand)){
            // return this.PayOuts.get('2OfKind');
            ret.PayOuts = this.PayOuts.get('2OfKind');
            ret.WinType = "A Pair";
        }
        if ( this.got3OfKind(hand)){
            // return this.PayOuts.get('3OfKind');
            ret.PayOuts = this.PayOuts.get('3OfKind');
            ret.WinType = "3 Of A Kind";
        }

        return ret;
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
    got3OfKind : function( hand ) {
        let valueHash = new Map();
        for( let i=0; i<hand.length; i++ ){
            let cVal = hand[i].value;
            console.log( `card:${cVal}`);
            if ( valueHash.get( cVal ) == undefined){
                valueHash.set( cVal, 1);
            } else if ( valueHash.get( cVal ) == 2 ) {
                    return true;
            } else {
                valueHash.set(cVal, (valueHash.get( cVal )+1));
            }
        }
        return false;
    }
}
function startGame() {
    User.hand = [];
    gotError = UI.setBet( "uBet", "Results");
    if ( !gotError ){
        User.hand = CardGame.setHand();
        let id = "Cards"
        UI.displayHand( User.hand, id );
        // if ( CardGame.gotPair( User.hand )){
        //     alert("Got Pair")
        // }
        // if ( CardGame.got3OfKind(User.hand)){
        //     alert( "Got 3 of kind ")
        // } else {
        //     alert( "No winner for you")
        // }
        let winRes = CardGame.checkHandForWinner(User.hand);
        if ( winRes.PayOuts ==  0 ){
            User.setWinnings( winRes.PayOuts, false)
            let msg = `<span style='color:red'> Loser! Hand Win: ${winRes.WinType}`;
               msg += `Bet:${User.bet} Winnings:${User.winnings} Total Attempts:${User.attempts} `;
               msg += `Total Wins:${User.totalWins}</span>`;
            console.log( `FL1:payout:${winRes.PayOuts}`)

            UI.displayResult( 'Results', msg);
        } else {
            User.setWinnings( winRes.PayOuts, true );
            console.log( `FL2:payout:${winRes.PayOuts}`)
            let msg = `<span style='color:blue'> Winner! Hand Win: ${winRes.WinType} `;
            msg += `Bet:${User.bet} Winnings:${User.winnings} Total Attempts:${User.attempts} `;
            msg += `Total Wins:${User.totalWins}</span>`;
            UI.displayResult( 'Results', msg);
        }
    }
}