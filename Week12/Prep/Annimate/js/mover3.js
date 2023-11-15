let id = null;
function  moveIt() {
    let elem = document.getElementById("myBlock");
    let pos = 0;
    clearInterval(id);
    let  direction = 'D';
    id = setInterval( () => {
        if(direction == 'D') {
            pos++;
        } else {
            pos--;
        }
        if (pos >= 350) {
            direction = "U";
        }
        if (pos < 0) {
            direction = 'D';
        }
        // elem.style.left = pos + 'px';
        elem.style.top = pos + 'px';
    }, 10)
}