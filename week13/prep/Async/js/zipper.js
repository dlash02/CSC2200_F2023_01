function getZipInfo() {
    let base = "https://api.zippopotam.us/us/";
    let zip = document.getElementById("zip").value;
    let URL = base +  zip;
    console.log( "url=" + URL);

    alert( "Loading URL=" +URL );
    fetch(URL)
        .then( res => res.json())
        .then(  function (data) {
            if ( data.places  == undefined ){
                oStr = "<span style=color:red>No Data found for zip:" + zip + "</span>";
            } else {
                // console.log("flag2")
                oStr = "<table>";
                oStr += "<tr><th>Zip</th><th>Name</th><th>State</th><th>Lat</th><th>Long</th></tr>";
                let r = data.places[0];
                oStr += `<tr>`;
                oStr += `<td>${zip} </td>`;
                oStr += `<td>${r['place name']} </td>`;
                oStr += `<td>${r.state} </td>`;
                oStr += `<td>${r.latitude} </td>`;
                oStr += `<td>${r.longitude} </td>`;

            }
            document.getElementById("results").innerHTML =  oStr;
            console.log(data);
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
}