let shopList = [];
// let sz = 0;
function addItem() {
    // alert( "AddItem");
    let item = document.getElementById("item").value;
    shopList.push( item );
    // shopList[sz++] = item;
    let size = shopList.length;
     document.getElementById("results").innerHTML = `Added Item:${item} size:${size}`;
}
function removeFromList() {
    let item = document.getElementById("item").value;
    let oStr = "";
    let idx = shopList.indexOf(item);


    if ( idx != -1 ){
        shopList.splice(idx, 1);
        oStr = `Removed Item at ${idx}`;
    } else {
        oStr = `Item ${item} Not Found `;
    }

    document.getElementById("results").innerHTML = oStr;
}
function showList() {
    let size = shopList.length;
    let oStr = "<ol>";
    let item;
    for( let i=0; i< shopList.length; i++ ){
        item = shopList[i];
        oStr += `<li> ${item} </li>`
    }
    oStr += "</ol>"
    oStr += " And the item was " + item;
    document.getElementById("results").innerHTML = oStr;
}
