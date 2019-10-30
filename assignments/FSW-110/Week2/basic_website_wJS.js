var navBar = document.createElement("nav");
document.body.appendChild(navBar);

var link = document.createElement("a");
link .setAttribute("href" , "/html");
var text1 = document.createTextNode("Bryan");
link.appendChild(text1);

navBar.appendChild(link);

var header = document.createElement("h1");
var headerText = document.createTextNode("Welcome to Chrystal's Home Page");
header.appendChild(headerText);
document.body.appendChild(header);

var paragraph = document.createElement("p");
var pText = document.createTextNode("This is the paragraph being inserted into my webpage JavaScript.  I am using the method outlined on the W3 Schools site.");
paragraph.appendChild(pText);
document.body.appendChild(paragraph);

var list = document.createElement("ul");
list.setAttribute("id" , "myList");
document.body.appendChild(list);

var item1 = document.createElement("li");
var t = document.createTextNode("This");
item1.appendChild(t);
document.getElementById("myList").appendChild(item1);

var item2 = document.createElement("li");
var is = document.createTextNode("Is");
item2.appendChild(is);
document.getElementById("myList").appendChild(item2);

var item3 = document.createElement("li");
var word = document.createTextNode("My");
item3.appendChild(word);
document.getElementById("myList").appendChild(item3);

var item4 = document.createElement("li");
var unordered = document.createTextNode("Unordered");
item4.appendChild(unordered);
document.getElementById("myList").appendChild(item4);

var item5 = document.createElement("li");
var list2 = document.createTextNode("List");
item5.appendChild(list2);
document.getElementById("myList").appendChild(item5);

var footer = document.createElement("footer");
footer.setAttribute("id" , "myFooter");
document.body.appendChild(footer);

var y = document.createElement("p");
var t = document.createTextNode("This is the amazing footer that I have chosen.");
y.appendChild(t);

document.getElementById("myFooter").appendChild(y);


