/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const numArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const romArray = ["M", "CM","D", "CD", "C","XC","L","XL", "X","IX","V","IV","I"]
    let temp = ""

    for(let i=0; i<numArray.length; i++){
        while(num - numArray[i] >= 0){
            temp = `${temp}`+romArray[i]
            num = num - numArray[i]
        }
    }

    return temp

};
