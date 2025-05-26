// problem 1.  remove falsy values from any array
let miscellaneous = ["🍓", false, "🍒", NaN, 0, undefined, "🍑", null, "🍎"];

// passing Boolean to array.filter() will remove falsy values form array
let fruits = miscellaneous.filter(Boolean);
// console.log(fruits);  //[ '🍓', '🍒', '🍑', '🍎' ];


// problem 2 ---> Convert any values to boolean
const masrafi = "masrafi"
// console.log(masrafi); //masrafi
// console.log(!!masrafi); //true



// problem 3 ---> resizing any array 
let animals = ["🐒", "🦍", "🦮", "🐈", "🐈‍⬛"];
// console.log(animals);
animals.length = 3 //length set 
// console.log(animals); // [ '🐒', '🦍', '🦮' ]
const resizing = animals.slice(0, 3); //slice resizing
// console.log(resizing); // [ '🐒', '🦍', '🦮' ];



// problem 4 ---> How to flatters a multi dimensional array
let smileys = ["😊", ["😒", "😘"], "😀", ["😋", "😕"]]

// console.log(smileys.flat()); // [ '😊', '😒', '😘', '😀', '😋', '😕' ]

let smileys2 = ["😊", [["😒", "😘"], "😀",], ["😋", "😕"]];
// console.log(smileys2.flat()); // [ '😊', [ '😒', '😘' ], '😀', '😋', '😕' ]
console.log(smileys2.flat(Infinity));  // [ '😊', '😒', '😘', '😀', '😋', '😕' ]


//  problem 5 ------> short conditions

const captain = "Masrafi";

// Instead of doing this 
if (captain !== "Masrafi") {
    // console.log("❤️");
}

// short form  --> we cna use && operator
// captain ==="Masrafi" && console.log("❤️");
captain === "Masrafi" || console.log("❤️");



// problem 6 -----> Replace all occurrences of a String
const quote = `React is the most popular framework & thi framework is most`;

// replace all occurrences of "framework" with "library"

console.log(quote.replace(/framework/g, "library")); //React is the most popular library & thi library is most





