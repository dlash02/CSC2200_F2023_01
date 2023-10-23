let menu = {
    pizza: {
        'Small': 9.99,
        'Medium': 10.99,
        'Large': 11.99
    },
    'tops': {
        'pepperoni': .50,
        'sauce': .60,
        'mushroom': .40,
        'onions': 1.00
    },
    'del': {
        'Pick=Up': 1.0,
        'In-Store': 0,
        'Delevery': 5.0
    }
}

function calcTotal() {
    alert("validate!");
    let  pSize = document.querySelector('input[type=radio][name=pSize]:checked').value;
    let  delOption = document.querySelector('.selOpts').value;
    let toppingObj = document.myForm.topping;
    let toppingCSV = getToppingCSV(toppingObj);
    let tTotal = getToppingTotal(toppingObj)
    let oStr = checkForErrors(delOption, pSize );
    if ( oStr == '') {
        oStr = buildOutput(pSize, toppingCSV, tTotal, delOption);
    }
    let res = document.getElementById('results');
    res.innerHTML = oStr;
}
function checkForErrors(delOption, pSize, toppingObj ) {
    let oStr  = "";
    let gotError = false;
    if ( menu.del[delOption] == undefined ) {
        oStr = "Error Delivery option is not found.";
        gotError = true;
    } else {
        console.log( `option:${delOption} val:${del[delOption]}`);
    }
    if ( menu.pizza[pSize] == undefined ) {
        oStr += ` Error Pizza Size option is not found: ${pSize}`;
    } else {
        console.log( `option:${pSize} val:${menu.pizza[pSize]}`);
    }
    console.log(`return oStr:${oStr}`)
    console.log( menu.pizza);
    return oStr;

}
function buildOutput( pizSize, toppingCSV, tTotal,  delOption ){
    let USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    let total = 0;
    let oStr = "<table border='1'>";
    let pizCost = menu.pizza[pizSize];
    oStr += `<tr><th> Pizza</th><th> ${pizSize} </th><th> ${USD.format(pizCost)} </th>`
    oStr += `<tr><th> Toppings</th><th> ${toppingCSV} </th><th> ${USD.format(tTotal)} </th>`
    let delCost = menu.del[delOption];
    oStr += `<tr><th> Delivery </th><th> ${delOption} </th><th> ${USD.format(delCost)} </th>`
    total += pizCost + tTotal + delCost;
    oStr += `<tr><th> Total </th><th>  </th><th> ${USD.format(total)} </th>`
    oStr += `</table>`
    return oStr;
}
function getToppingTotal(t) {
    let total = 0;
    for (i = 0; i < t.length; i++) {
        if (t[i].checked) {
            let v = t[i].value;
            total += menu.tops[v];
        }
    }
    return total;
}
function getToppingCSV(t) {
    let total = 0;
    let cma = "";
    let csv = "";
    for (i = 0; i < t.length; i++) {
        if (t[i].checked) {
            csv += cma + t[i].value;
            cma = ', ';
        }
    }
    return csv;
}
