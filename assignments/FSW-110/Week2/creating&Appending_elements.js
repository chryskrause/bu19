/* 
H1 with the text “Welcome to my JS site”
P wit the text “All of this was created with Javascript”
An Ordered list (ol) with at least three items (li).
Each li should also display text.
Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.
*/

var newH3 = document.createElement("h1")
newH3.textContent = "Welcome to Chrystal's JS site!"
newH3.style.textAlign = "center"
newH3.style.color = "darkblue"
document.body.append(newH3)

var paragraph = document.createElement("p")
paragraph.textContent = "All of this was created with JavaScript"
document.body.append(paragraph)


var list = document.createElement("OL");
list.setAttribute("id", "myOl");
document.body.appendChild(list);

var itemA = document.createElement("LI")
var a = document.createTextNode("This")
itemA.appendChild(a)
document.getElementById("myOl").appendChild(itemA)

var itemB = document.createElement("LI")
var b = document.createTextNode("Is")
itemB.appendChild(b)
document.getElementById("myOl").append(itemB)

var itemC = document.createElement("LI")
var c = document.createTextNode("Learning")
itemC.appendChild(c)
document.getElementById("myOl").append(itemC)







