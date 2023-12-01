function loadTable(){
   let url = "https://jsonplaceholder.typicode.com/todos/11";
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
    const newTR = document.createElement("tr");
    newTR.innerHTML = `
        <td> ${data.userId} </td>
        <td> ${data.id} </td>
        <td> ${data.title} </td>
        <td> ${data.completed} </td>
    `;
    tBody.appendChild( newTR );

}