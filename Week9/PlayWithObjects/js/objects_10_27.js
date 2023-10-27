let person = {};
person.name="George";
let person2 = {
    name : "George",
    age : 135,
    abilities : ['Strong', 'Throws webs', 'flys'],
    likes : {

    }
}
function doTheStuff(){
        let res = document.getElementById("results");
        // res.innerHTML = `Person:${person.name}`;
        // res.innerHTML += `Person2:${person2.name}`;
        res.innerHTML = `Person:${person['name']}`;
         res.innerHTML += `Person2:${person2['name']}`
        let ans = undefined;
        while( true ) {
            ans = prompt("What you want to see->");
            if (person2[ans] == undefined) {
                alert("Try that again")
            } else {
                break;
            }
        }
        res.innerHTML += `ans:${ans}`
        res.innerHTML += `TheName:${person2[ans]}`

}