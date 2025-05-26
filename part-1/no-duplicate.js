/**
 * Array has some duplicate elements
 * []
 */

const biranyCor = [ "pranto", "abir", "nayeem", "pranto", "tanvir", "nayeem"];

const numbers = [23, 34, 5, 56, 56, 67, 23];
const unique = [];
function noDuplicate (array){
   for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }    
    } 
    return unique
}

const duplicateValue = noDuplicate(biranyCor)
console.log("duplicate array ------->", "\n",biranyCor);
console.log(duplicateValue);

