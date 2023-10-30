let deck = {
    cards: [
        { 'img' : '2C.png', 'value' : 2, suit: 'clubs', 'dealt' : false },
        { 'img' : '2H.png', 'value' : 2, suit: 'hearts', 'dealt' : false },
        { 'img' : '2D.png', 'value' : 2, suit: 'diamonds', 'dealt' : false },
        { 'img' : '2S.png', 'value' : 2, suit: 'spades', 'dealt' : false },

        { 'img' : '3C.png', 'value' : 3, suit: 'clubs', 'dealt' : false },
        { 'img' : '3H.png', 'value' : 3, suit: 'hearts', 'dealt' : false },
        { 'img' : '3D.png', 'value' : 3, suit: 'diamonds', 'dealt' : false },
        { 'img' : '3S.png', 'value' : 3, suit: 'spades', 'dealt' : false },

        { 'img' : '4S.png', 'value' : 4, suit: 'spades', 'dealt' : false },
        { 'img' : '4H.png', 'value' : 4, suit: 'hearts', 'dealt' : false },
        { 'img' : '4D.png', 'value' : 4, suit: 'diamonds', 'dealt' : false },
        { 'img' : '4C.png', 'value' : 4, suit: 'clubs', 'dealt' : false },

        { 'img' : '5S.png', 'value' : 5, suit: 'spades', 'dealt' : false },
        { 'img' : '5H.png', 'value' : 5, suit: 'hearts', 'dealt' : false },
        { 'img' : '5D.png', 'value' : 5, suit: 'diamonds', 'dealt' : false },
        { 'img' : '5C.png', 'value' : 5, suit: 'clubs', 'dealt' : false },

        { 'img' : '6S.png', 'value' : 6, suit: 'spades', 'dealt' : false },
        { 'img' : '6H.png', 'value' : 6, suit: 'hearts', 'dealt' : false },
        { 'img' : '6D.png', 'value' : 6, suit: 'diamonds', 'dealt' : false },
        { 'img' : '6C.png', 'value' : 6, suit: 'clubs', 'dealt' : false },

        { 'img' : '7S.png', 'value' : 7, suit: 'spades', 'dealt' : false },
        { 'img' : '7H.png', 'value' : 7, suit: 'hearts', 'dealt' : false },
        { 'img' : '7D.png', 'value' : 7, suit: 'diamonds', 'dealt' : false },
        { 'img' : '7C.png', 'value' : 7, suit: 'clubs', 'dealt' : false },

        { 'img' : '8S.png', 'value' : 8, suit: 'spades', 'dealt' : false },
        { 'img' : '8H.png', 'value' : 8, suit: 'hearts', 'dealt' : false },
        { 'img' : '8D.png', 'value' : 8, suit: 'diamonds', 'dealt' : false },
        { 'img' : '8C.png', 'value' : 8, suit: 'clubs', 'dealt' : false },

        { 'img' : '9S.png', 'value' : 9, suit: 'spades', 'dealt' : false },
        { 'img' : '9H.png', 'value' : 9, suit: 'hearts', 'dealt' : false },
        { 'img' : '9D.png', 'value' : 9, suit: 'diamonds', 'dealt' : false },
        { 'img' : '9C.png', 'value' : 9, suit: 'clubs', 'dealt' : false }
    ],
    dealtCt : 0,
    getCard :function() {
        let gotGoodCard = false;
        while (!gotGoodCard) {
            let rNum = Math.floor(Math.random() * deck.cards.length);
            console.log(rNum);
            let card = deck.cards[rNum];
            if (!card.dealt) {
                card.dealt = true;
                this.dealtCt += 1;
                return deck.cards[rNum];
            } else if ( this.dealtCt == deck.cards.length ) {
                let resp = prompt("Out of cards ... resuffle?");
                return null;
            } else {
                console.log( `Get a new card:`); console.log( card );
            }
        }
    }
};
let cardGame = {
    hand : [],
    resetHand :function() {
        this.hand = [];
    },
    gotPair :function() {
        let handValues = {};
        for( let i=0; i<this.hand.length; i++ ){
            let v = this.hand[i].value;
            if ( handValues[v]){
                console.log( handValues)
                return true;
            } else {
                handValues[v] = 1;
            }
        }
        console.log( handValues)
        alert("false")
        return false;
    },
    got3OfKind :function() {
        let handValues = {};
        for( let i=0; i<this.hand.length; i++ ){
            let v = this.hand[i].value;
            if ( handValues[v]){
                handValues[v] += 1;
                if ( handValues[v] >= 3 ) return true;
            } else {
                handValues[v] = 1;
            }
        }
        console.log( handValues)
        alert("false")
        return false;
    },

}
let ui = {
    error: "",
    bet: 0,
    displayCardHand: function (id) {
        let oObj = document.getElementById(id);
        oObj.innerHTML = "";
        let oStr = `<h2> ${cardGame.hand.length} Cards </h2>`;
        for (let i = 0; i < cardGame.hand.length; i++) {
            let c = cardGame.hand[i];
            oStr += `<img src='imgs/${c.img}' height='50px' width='50px'> `;
        }
        oObj.innerHTML = oStr;
    },
    setBet: function (BetId, BetDisId) {

        let betMsg = "";
        let gotBet = true;
        this.bet = document.getElementById(BetId).value;
        if (this.bet <= 0 || isNaN(this.bet / 2) || this.bet == undefined || this.bet == null) {
            this.error = "Illegal Input";
            betMsg = `<span style='color:red'> Illegal Bet:${this.bet} </span>`;
            gotBet = false;
        } else {
            betMsg = `<span style='color:blue'> Bet:${this.bet} </span>`;
            gotBet = true;
        }
        document.getElementById(BetDisId).innerHTML = betMsg;

        return gotBet;
    }, showWinner( winnerId, msg ){
        document.getElementById(winnerId).innerHTML = msg;
    }
};
function displayCardImg( c, id) {
    let oObj = document.getElementById(id);
    let oStr = `<img src='imgs/${c.img}' height='50px' width='50px'> `;
    oObj.innerHTML = oStr;
}
function displayCardHand( id) {

    let oObj = document.getElementById(id);
    oObj.innerHTML = "";
    let oStr = `<h2> ${cardGame.hand.length} Cards </h2>`;
    for( let i=0; i<cardGame.hand.length; i++ ) {
        let c = cardGame.hand[i];
        oStr += `<img src='imgs/${c.img}' height='50px' width='50px'> `;
    }
    oObj.innerHTML = oStr;
}
function startGame() {
    // cardGame = deck.getCard();
    // console.log( card );
    //
    // displayCardImg( card, "Cards");
    let gotGoodCard = false;
    if (ui.setBet("uBet", "betMsg")) {
        alert( "BLADH")
        cardGame.resetHand();
        cardGame.hand.push(deck.getCard());
        cardGame.hand.push(deck.getCard());
        cardGame.hand.push(deck.getCard());
        cardGame.hand.push(deck.getCard());
        cardGame.hand.push(deck.getCard());
        ui.setBet("uBet", "betMsg");
        ui.displayCardHand("Cards");
        if (cardGame.got3OfKind() ){
            let msg = "Winner Got 3 of kind";
            ui.showWinner( 'Results', msg );
        } else if ( cardGame.gotPair() ) {
            let msg = "Winner Got a pair there";
            ui.showWinner('Results', msg);
        } else {
            let msg = "No winner for you";
            ui.showWinner( 'Results', msg );
        }
    }
}