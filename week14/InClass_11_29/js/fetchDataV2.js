function loadTable(  ){
   let url = `https://jsonplaceholder.typicode.com/todos`;
   fetch( url )
       .then( resp => {
           if ( !resp.ok){
               throw new Error("HTTP ERROR Status" + resp.status);
           }
           return resp.json();
       }).then( jObj  => {
            // console.log("Made it->");
            // console.log( jObj );
            addToTable( jObj );
      }).catch( error => {
       console.log("Oh oh error error->");
       console.log( error );
   })
    document.getElementById("result").innerHTML = "Did it work"
}
function addToTable( data ){
    const tBody = document.getElementById("theBody");
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        const newTR = document.createElement("tr");
        newTR.innerHTML = `
        <td> ${row.userId} </td>
        <td> ${row.id} </td>
        <td> ${row.title} </td>
        <td> ${row.completed} </td>
    `;
        tBody.appendChild(newTR);
    }
}