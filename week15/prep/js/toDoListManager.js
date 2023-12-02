function loadTable(  ){
   let url = `http://localhost:8000/todos`;
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
    attachEventListener();
}
function addToTable( data ){
    const tBody = document.getElementById("theBody");
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        const newTR = document.createElement("tr");
        newTR.innerHTML = `
        <td> ${row.id} </td>
        <td> ${row.title} </td>
        <td> ${row.completed} </td>
    `;
        tBody.appendChild(newTR);
    }

}
function attachEventListener() {
    let theForm = document.getElementById('theForm');
    theForm.addEventListener('submit', function(e){
        e.preventDefault()
        alert( 'submit');
        let URL = "http://localhost:8000/todos";
        const t = document.getElementById('title').value;
        const c = document.getElementById('Completed').value;
        const item = {  title: t, completed : c }; // create book object

        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify( item )
        }).then(( resp) => resp.json())
            .then (data => {
                console.log("Added new item data="); console.log( data);
                alert("Insert Compelte")
                location.reload();
            }).catch( error => {
            console.log("Error:"); console.log( error );
        })
        alert("Insert ")
    });
}
