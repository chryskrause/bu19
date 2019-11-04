
var list = document.createElement("UL");
list.setAttribute("id", "myUL");
document.body.appendChild(list);
/*
var a = document.createElement("LI");
var b = document.createTextNode("Change");
a.appendChild(b);
document.getElementById("myUL").appendChild(a);

var c = document.createElement("LI");
var d = document.createTextNode("Style");
c.appendChild(d);
document.getElementById("myUL").appendChild(c);

var e = document.createElement("LI");
var f = document.createTextNode("With");
e.appendChild(f);
document.getElementById("myUL").appendChild(e);

var g = document.createElement("LI");
var h = document.createTextNode("JavaScript");
g.appendChild(h);
document.getElementById("myUL").appendChild(g);
*/

var loop = ["Change", "Style", "With", "JavaScript"]
    for (var i = 0; i < loop.length; i++){
        var x = document.createTextNode(loop[i]);
        list.appendChild(x)
    }

document.getElementById("myUL").style.fontSize = "20px";
document.getElementById("myUL").style.fontWeight = "lighter";
document.getElementById("myUL").style.fontFamily = "sans-serif";
document.getElementById("myUL").style.color = "cornflowerblue";

document.querySelector("#myUL").classList.add("border");
