let baseUrl = `http://localhost:8001/todos`;
let rKey = "reloadMsg";
function loadTable(  ){
    let msg = 'Request Completed!!';
   fetch( baseUrl )
       .then( resp => {
           if ( !resp.ok){
               //msg = `<span id='error'> Error:${resp.status} </span>`;
               //document.getElementById("result").innerHTML = msg;
               showMsg( 'error', msg);
               throw new Error("HTTP ERROR Status" + resp.status);
           }
           return resp.json();
       }).then( jObj  => {
            // console.log("Made it->");
            // console.log( jObj );
            addToTable( jObj );
      }).catch( error => {

       // msg = `<span id='error'> Error2:${error.message} </span>`;
       // document.getElementById("result").innerHTML = msg;
       msg = ` Error2:${error.message}`;
       console.log(`Error2:->${msg}`);
       showMsg( 'error', msg);

   })
    // document.getElementById("result").innerHTML = msg;
    attachEventListener();
    let reloadMsg = localStorage.getItem(rKey );
    if ( reloadMsg){
        showMsg('success', reloadMsg);
        alert( reloadMsg); alert("sss")
        localStorage.removeItem(rKey );
    }
}
function addToTable( data ){
    const tBody = document.getElementById("theBody");
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        const newTR = document.createElement("tr");
        newTR.innerHTML = `
        <td> ${row.id} </td>
        <td> ${row.title} </td>
        <td> ${row.completed} 
                <td> <button type="button" onClick='handleUpdate(${row.id}, "${row.title}")'> Mark Done ${row.id} </td>
        </td>
        <td> <button type="button" onClick="handleDelete(${row.id})"> Delete ${row.id} </td>
    `;
        tBody.appendChild(newTR);
    }
    // let msg = ` Fetch Complete`;
    // showMsg( 'success', msg);
}
function attachEventListener() {
    let theForm = document.getElementById('theForm');
    theForm.addEventListener('submit', function(e){
        e.preventDefault()
        alert( 'submit');
        // URL = "http://localhost:8001/todos";
        const t = document.getElementById('title').value;
        const c = document.getElementById('Completed').value;
        const item = {  title: t, completed : c }; // create book object

        fetch( baseUrl , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify( item )
        }).then(( resp) => resp.json())
            .then (data => {
                console.log("Added new item data="); console.log( data);
                localStorage.removeItem(rKey );
                localStorage.setItem(rKey, `Item Added Complete`);
                location.reload();
            }).catch( error => {
            msg = ` Error2b:${error.message}`;
            showMsg( 'error', msg);
        })
    });
}
function handleDelete( id ){
        URL = `${baseUrl}/${id}`;
        fetch(URL , {
            method: 'DELETE',
        }).then(() => {
            alert("delete Compelte")
            localStorage.removeItem(rKey );
            localStorage.setItem(rKey, `Delete id:${id} Complete`);
            location.reload();
        })
}
function handleUpdate( id, title ){
    let r = {};
    r.id = id;
    r.title = title;
    r.completed = 'true';
    URL = `${baseUrl}/${id}`;
    const options = {
        method : 'PUT',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify( r )
    }
    fetch(URL , options )
    .then(() => {
        alert("Updated Compelte");
        localStorage.removeItem(rKey );
        localStorage.setItem(rKey, `Marked id:${id} Complete`);
        location.reload();
    })
}
function showMsg( id, msg ){
    msg = `<span id='${id}'> ${msg} </span>`;
    document.getElementById("result").innerHTML = msg;
}