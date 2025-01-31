// datatypes
    // strings
    // booleans
    // numbers
// data structures
    // arrays
    // objects

// const array = ["green", "red", "blue"];

// console.log(array.length);

// for (let i = 0 ; i < array.length; i++) {
    // do something
//    let currentColor = array[i];
//     console.log(currentColor);
//  }

// console.log(array);



// const mixedArray = ["green", "red", "blue", 1, 5, 10, {name: "Matthew"}, true, false, [0, 2], [10, 16, [20, 40, 60]]];

// let colors = ["green", "red", "blue"]
// const colors2 = ["yellow", "orange", "black"]
// console.log("Original Array: ", colors);

// colors.push("purple");
// colors.splice(1, 1, "aqua"); // we come in and go to the second value and remove the second value, which was red. We can then add another value to the array.
// colors.unshift("brown");
// colors.concat(colors2)
// console.log("New Array: ", colors);



// let count = 11;
// while (count > 0) {
//    count--;
//    console.log(count);
//  }

// let colors = ["green", "red", "blue"]
// for (let color of colors) {
//    console.log(color);
//   }

// const person = {
//    name: "Matthew",
//    age: 23,
//    profession: "student"
// }

// for (let key in person) { // for-in loop
//     if ( Object.hasOwnProperty.call(person, key))
//        console.log(`${key}: ${person[key]}`); // we grab the values from the const person and ////then use the key to enter the for-in loop. | The KEY is the INDEX.
// }

// function sum(numbers) {
//    console.log(numbers); // use this to find the numbers values
//    let total = 0;
//    for (let i = 0; i < numbers.length; i++) {
    //    console.log(numbers[i]);
//        total += numbers[i];
//    }
//   // if false do this:
//    console.log(total);
//  }


// GOAL: create a function that returns an array of ONLY even numbers

function evenNumbers(numbers) {
    //
    // storage for the array of even numbers
    let evenArray = [];
    // loop over the array of numbers
    for(let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        console.log(currentNumber); {
    }
    // logic to sort even numbers from odds.
    // get even numbers into its own array.
    if (currentNumber % 2 === 0) {
        // get even numbers in its own array
        evenArray.push(currentNumber);
        
    }
    }   
    console.log(evenArray);
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9,]);