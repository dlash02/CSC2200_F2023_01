let id = null;
function myMove() {
    let theBock = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval( moveMyBlock, 10 );
    let direction = "D";
    function moveMyBlock() {
        if ( direction == "D") pos++
        else pos--;

        if ( pos >= 350 ){
            // clearInterval(id);
            direction = "U"
        }
        if ( pos <= 0 ) {
            direction = "D";
        }
        theBock.style.top = pos + 'px';
    }

}