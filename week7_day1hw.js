//  exercise 1
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

for (let i = 0; i < dog_names.length; i++) {}

const matchString = (string, array) => {
  for (let i = 0; i < array.length; i++) {
    if (string.includes(array[i])) {
      return console.log(`Matched ${array[i]}`);
    }
  }
};

matchString(dog_string, dog_names);

// exercise 2

/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr1 = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i % 2 == 0) {
      arr.splice(i, 1, "even index");
    }
    i++;
  }
  return console.log(arr);
}

replaceEvens(arr1);

// codewars problem 1 output [(positive number count in an array),(sum of negatives in anarray)]

function countPositivesSumNegatives(input) {
  const final = []
  let positiveSum = 0
  let negativeSum = 0

  if(input && input.length) {
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
          positiveSum += 1
      } else {
          negativeSum += input[i]
      }
    }
    final.push(positiveSum)
    final.push(negativeSum)
  }
  return final
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,]));

// codewars problem 2 reverse sequence

const reverseSeq = n => {
  let arr = [];
  for (i = n; i >= 1; i--){
    arr.push(i);
  }
  return arr;
};

console.log(reverseSeq(5))
