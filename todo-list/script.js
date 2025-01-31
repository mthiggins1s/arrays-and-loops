// Exercise 1 |  Create a Todo List
// function todoList (todoItems, newItem) {
//     console.log(todoItems);
//     todoItems.push(newItem);
//     console.log(todoItems);
//     todoItems.shift(newItem);
//     console.log(todoItems);
// }

// todoList(["Make dinner", "Wash dishes", "Play Video Games"], "Watch Youtube");

// Exercise 2 | Count Even Numbers

// function evenNumbers(numbers) {
//    let total = 0;
//    console.log(numbers)

//    for(let i = 0; i < numbers.length; i++){
//        let currentNumber = numbers[i];
        // console.log(currentNumber);
//        if(currentNumber % 2 === 0) {
//            total ++
//        }
//    }
//    console.log(total);
// }

// evenNumbers([5, 20, 40, 60]);

// Exercise 3 | Reverse an Array

// Create an array.
// Write a loop to reverse its elements.
// Log the reversed array.

// const reverseArray = {
//     array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     reversedArray: [],

//     reverse: function (numbers) {
//         this.reversedArray = [];
//         for (let i = numbers.length - 1; i >= 0; i--) {
//             this.reversedArray.push(numbers[i]);
//         }
//         console.log(this.reversedArray);
//     }
// };
// reverseArray.reverse(reverseArray.array);




// Exercise 4 | Find the Largest Number
// GOAL: Create a function that finds the largest number within the array.

// Create a function
// Store an array within the variable Ex. let x = 0
// Create a loop
// Use logic to find the largest number within the array
// Log the Result

function largestNumber (myArray) {
    let highestNumber = 0;

    for (let i = 0; i < myArray.length; i++) { // start of loop
        let currentNumber = myArray[i]
        console.log("I am the current number:",currentNumber)
        
        if (currentNumber > highestNumber) {
            console.log("I am the current highest number", highestNumber);

            highestNumber = currentNumber
            console.log("I have been reassigned the greater value:", highestNumber);
    }   else {console.log("I was not larger, so I got skipped")}
    } // end of loop
   
   
    console.log(highestNumber);
}
largestNumber([1,2,3,4,5,200,100,500]);