// 12 inch = 1 feet
function inchToFeet (inch){
  const feet = inch / 12;
 return feet;
}
const abdulHeight = inchToFeet(45)
// console.log(abdulHeight);

//  mills to km convert
function millsToKm (mills){
     const km = mills * 1.61
     return km
}
const km  = millsToKm(10);
console.log(km);

// km to mills
function kmToMills (km){
    const mills = km / 0.61
    return mills
}
const mills = kmToMills(34);
console.log(mills);