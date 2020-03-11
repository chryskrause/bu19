const boxes =[
    {Titel:"Box 1", SubTitle: "Apples", Color:"red"},
    {Titel:"Box 2", SubTitle: "Rasberry", Color:"red"},
    {Titel:"Box 3", SubTitle: "Oranges", Color:"red"},
    {Titel:"Box 4", SubTitle: "Grapes", Color:"red"}

]
const modify = function(parameter){
   var tempBox =  parameter 
   tempBox.Color = "Blue"
   return tempBox;
}

const print = function(printValue){
    console.log(printValue.Titel)
    console.log(printValue.SubTitle)
    console.log(printValue.Color)
    console.log("--------------------")
    
}
var modifiedBoxes = boxes.map(modify);
boxes.map(print);
