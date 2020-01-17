const lOrgana = {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female",
    "homeworld": "https://swapi.co/api/planets/2/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z",
    "url": "https://swapi.co/api/people/5/"
}

const organa2 = JSON.stringify(lOrgana)

const wPage = document.createElement("DIV");
const t = document.createTextNode(organa2);
wPage.setAttribute("style", "background-color: pink;");
wPage.appendChild(t);
document.body.appendChild(wPage)

console.log(lOrgana.name)

const x = document.createElement("UL");
x.setAttribute("id", "myUL");
document.body.appendChild(x).innerHTML = "Princess Leia";

const yy = document.createElement("LI");
const tt = document.createTextNode("Name: " + lOrgana.name);
yy.setAttribute("style", "font-size: 20px;");
yy.appendChild(tt);
document.getElementById("myUL").appendChild(yy);

const xx = document.createElement("LI");
const ttt = document.createTextNode("Gender: " + lOrgana.gender);
xx.appendChild(ttt);
document.getElementById("myUL").appendChild(xx);

const xxx = document.createElement("LI");
const tttt = document.createTextNode("Films: " + lOrgana.films);
xxx.appendChild(tttt);
document.getElementById("myUL").appendChild(xxx);

document.getElementById("myUL").style.backgroundColor = "lightblue";
document.getElementById("myUL").style.color = "yellow";



