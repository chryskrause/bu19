const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]

for (let i = 0; i < names.length; i++) {
    var x = document.createElement("HEADER");
    x.setAttribute("id", "myHeader");
    document.body.appendChild(x);

    var y = document.createElement("h1");
    var t = document.createTextNode(names[i]);
    y.appendChild(t);

    document.getElementById("myHeader").appendChild(y).style.color = "red";
}

document.getElementById("myHeader").style.textDecoration = "underline";

document.body.style.backgroundColor = "lightgray";

