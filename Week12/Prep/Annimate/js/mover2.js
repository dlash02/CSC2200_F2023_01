let id = null;
function  moveIt() {
    let elem = document.getElementById("myBlock");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    let  direction = 'D';
    function frame() {
            if ( direction  == 'D')  pos++;
            else pos--;

            if ( pos >= 350 ){
                 direction = "U";
            }
            if ( pos <0 ) {
                direction = 'D';
            }
            // elem.style.left = pos + 'px';
            elem.style.top = pos + 'px';
    }
}