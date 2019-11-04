
var x = document.createElement("h1");
document.getElementById("").style.backgroundcolor = "red";
document.body.appendChild(x);

const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily"]

for (var i = 0; i < names.length; i++){
    var y = document.createTextNode(names[i]);
    x.appendChild(y);
    
    }

//
//document.getElementsByTagName(names).style.color = "red";



