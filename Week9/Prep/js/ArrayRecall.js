// arrays are special type of JS objects
// use # for indices
let shopping = [];
let shopping2 = new Array();
shopping.push('Beans');
shopping.push('Bacon');
shopping.push('Bananas');
alert("Loading")
function doArrays() {
    shopping[shopping.length] = "Broccoli";
    document.getElementById("results1").innerHTML = `Shopping List:${shopping.toString()}`;
    document.getElementById("results2").innerHTML = `Shopping List:${shopping.sort().toString()}`;
   let lastItem =shopping[length-1];
   console.log(`lastItem:{lastItem}`);
   // ragged arrays are possible
    shopping[6] = "Black Beans";
    console.log( "This list="); console.log( shopping);

}
function doArrays2() {
    // using string indexes are possible BUT
    //    uses them more as objects
    console.log("doArrays2------------")
    let shopping2 = new Array("Pizza", "Popcorn", 'Pineapple', "Plumbs")
    shopping2['Pie'] = 22;
    console.log( shopping2);

    console.log( "Array->" + typeof shopping2);
    console.log( "Array2->" + Array.isArray(shopping2)); // still 3 items but has a property
    console.log( "Shopping length=" + shopping2.length + " and Butter Val=" + shopping2.Pie );
    document.getElementById("results1").innerHTML = `Shopping List:${shopping2.toString()}`;
    let firstItem =shopping2.pop();
    console.log(`lastItem:${firstItem}`);
}
function doArrays3() {
    // using string indexes are possible BUT
    //    uses them more as objects
    console.log("doArrays3------------")
    let cards = [ 'A', "K", 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '2'];
    let hand = new Array("2", "5", "3", "A" );
    let guess = getGuess( cards );
    let result3 = ""
    if ( hand.indexOf(guess) == -1 ){
        result3 = "Go Fish"
    } else {
        result3 = `Yes I have ${guess} in hand:${hand.toString()}`;
    }
    document.getElementById("results1").innerHTML = "Hand:" + hand.toString();
    document.getElementById("results2").innerHTML = "Guess:" + guess;
    document.getElementById("results3").innerHTML = "Results:" + result3;
}
function getGuess( inCards ){
    while( true ){
        let uGuess = prompt("Pick A Card (e.g., A, K, Q, J, 10, etc)");
        if (   inCards.indexOf(uGuess) != -1 ){
            return uGuess;
        } else {
            alert(`Sorry ${uGuess} not in deck`);
        }
    }
}




