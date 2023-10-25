let pizza = new Array();
pizza['Small'] = 9.99;
pizza['Medium'] = 10.99;
pizza['Large'] = 11.99;

let tops = new Array();
tops['pepperoni'] = .50;
tops['sauce'] = .60;
tops['mushroom'] = .40;
tops['onions'] = 1.00;

let del = [];  // Added
del['Pick-Up'] = 1.0;  // Added
del['In-Store'] = 0;  // Added
del['Delivery'] = 5.00;  // Added
function calcTotal() {
    let  pSize = document.querySelector('input[type=radio][name=pSize]:checked').value;
    alert(`Pizza selected:${pSize}`);
    let pCost = pizza[pSize];
    alert(`Pizza cost :${pCost}`);
    let  delOption = document.querySelector('.selOpts').value;
    alert(`Deliver selected:${delOption}`);
    alert(`Deliver Cost:${del[delOption]}`);
    let topObj = document.myForm.topping;
    let toppingCSV = getToppingCSV( topObj );
    let toppingTotal = getToppingTotal( topObj );
    console.log( "FLAG--->>>")
    console.log( toppingTotal );
    // left off here 10/16

}
function getToppingTotal(tObj) {
    let total = 0;
    for ( let i=0; i<tObj.length; i++ ){
        if ( tObj[i].checked == true ){
            let optionVal = tObj[i].value;
            total += tops[optionVal];
        }
    }
    return total;
}

function getToppingCSV(tObj) {
    let csv = "";
    let comma = "";
    for ( let i=0; i<tObj.length; i++ ){
        if ( tObj[i].checked == true ){
            csv += comma + tObj[i].value;
            comma = ", ";
        }
    }
    return csv;
}