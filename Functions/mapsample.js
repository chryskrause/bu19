const arrays = [2, 4, 6, 8, 10]
const modifiedValue = function(value1){
    return value1 * 1110
}
const modifiedArray = arrays.map((item)=> modifiedValue(item) )

console.log(modifiedArray)