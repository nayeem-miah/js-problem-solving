/**
 * SIMPLE LOGIC
 * year will be a leap year if this year is devisable by 4
 */

function isLeapYear(year){
    if (year % 4  === 0) {
        console.log("this year is leap year", year);
    }
    else{
        console.log("this year is not leap year",year);
    }
}
// isLeapYear(221)


/**
 * THOSE YEAR THAT IS NOT DEVISABLE BY 100 AND IF THE YEAR IS DEVISABLE BY 4 ; 
 * THEN IT WILL BE A LEAP YEAR
 */

function leapYear(year){
    if(year % 4 ===0 && year % 100 !==0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) return true 
    else{
        return false
    }
}

const isYear = leapYear(2000)
console.log(isYear);