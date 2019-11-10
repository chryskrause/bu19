
document.querySelector("#box").addEventListener("mouseover", mouseOver);
function mouseOver () {
    document.querySelector("#box").style.backgroundColor = "blue";
}
document.querySelector("#box").addEventListener("click", clickFunction);
function clickFunction () {
    document.querySelector("#box").style.backgroundColor = "red";
}
document.querySelector("#box").addEventListener("mouseleave", mouseLeaveFunc);
function mouseLeaveFunc () {
    document.querySelector("#box").style.backgroundColor = "yellow";
}
document.querySelector("#box").addEventListener("dblclick", twoClick);
function twoClick () {
    document.querySelector("#box").style.backgroundColor = "green";
}
document.querySelector("#box").addEventListener("scroll", scrollFunc);
function scrollFunc () {
    document.querySelector("#box").style.backgroundColor= "orange";
}


/*
document.querySelector("#box").addEventListener("onkeypress", onKey);

var keyCode = window.event ? window.event.keyCode : event.which;
changeColor(KeyCode)
function onKey (keyCode)
    if (keyCode === 66){
        document.querySelector("#box").style.backgroundColor = "blue";
    }
    */