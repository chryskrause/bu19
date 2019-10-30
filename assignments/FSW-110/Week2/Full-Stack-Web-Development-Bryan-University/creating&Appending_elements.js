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


var list = document.createElement("ol")
var item1 = document.createElement("li")
document.ol.append(item1)
item1.textContent = "This"
var item2 = document.createElement("li")
item2.textContent = "Is"
document.ol.append(item2)
var item3 = document.createElement("li")
item3.textContent = "Learning"
document.ol.append(item3)





