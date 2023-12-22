let baseUrl =  'http://localhost:8000/todos';
function loadTable(){
    let url = baseUrl;
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
    attachEventListener();
}
function attachEventListener() {
    let theForm = document.getElementById("theForm");
    theForm.addEventListener('submit', function( e ) {
        e.preventDefault();
        alert("Submit");
        const t = document.getElementById("title").value;
        const c = document.getElementById("Completed").value;
        const item = { title : t, completed: c }
        console.log( 'item='); console.log( item );
        let url =  baseUrl;
        fetch( url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( item )
        } )
            .then( resp => resp.json())
            .then( data => {
                 // alert ("Insert Complete")
                location.reload();
            }).catch( error => {
            console.log("Oh oh error error->");
            console.log( error );
        })
    })
}
function addToTable( data ){
     const tBody = document.getElementById("theBody");
     for( let i=0; i<data.length; i++ ){
         let row = data[i];
         const newTR = document.createElement("tr");
         newTR.innerHTML = `
             <td> ${row.id} </td>
             <td> ${row.title} </td>
             <td> ${row.completed} </td>
             <td> 
                <button type="button" onClick="handleDelete(${row.id})">
                       Delete ${row.id} 
                </button> 
              </td>
         `;
         tBody.appendChild(newTR );
     }
}
function handleDelete( id ) {
    let url = `${baseUrl}/${id}`;
    fetch( url, {
        method: 'DELETE'
    } )
        .then( resp => {
            if ( !resp.ok){
                throw new Error("HTTP ERROR Status" + resp.status);
            }
            location.reload();
    }).catch( error => {
        console.log("Oh oh error error->");
        console.log( error );
    })
}