const arrays = [2, 4, 6, 8, 10]
const modifiedValue = function(value1){
    return value1 * 1110
}

for(let i=0; i<arrays.length; i++){
     modifiedValue(arrays[i]);
}
const modifiedArray = arrays.map((item)=> modifiedValue(item) )
const modifiedArray2 = arrays.map(modifiedValue)

console.log(modifiedArray)
console.log(modifiedArray2)

console.log(arrays)
