function loadZip() {
    let zip = document.getElementById("zip").value;
    let url = `https://api.zippopotam.us/US/${zip}`;
    fetch( url )
        .then( resp => {
            if ( !resp.ok){
                throw new Error("HTTP ERROR Status" + resp.status);
            }
            return resp.json();
        }).then( jObj  => {
             showResults( jObj );
    }).catch( error => {
        console.log("Oh oh error error->");
        console.log( error );
        document.getElementById('result').innerHTML = `Zip:${zip} is unknown`;
    })
}
function showResults( zipObj ) {
    console.log("Data->");
    console.log(zipObj);
    let res = document.getElementById('result');
    let country = zipObj.country;
    let countryAbv = zipObj['country abbreviation'];
    let stateAbv = zipObj.places[0]["state abbreviation"];
    let city = zipObj.places[0]["place name"];
    let state = zipObj.places[0].state;

    console.log("Country->");
    console.log(country);
    console.log("CountryAbrb->");
    console.log(countryAbv);
    res.innerHTML = `country:${country} state=${state} city:${city}`;
}
