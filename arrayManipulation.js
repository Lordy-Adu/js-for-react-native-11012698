// arrayManipulation.js

// Task 1: Function to process the array of numbers
function processArray(numbers) {
  return numbers.map(num => {
      if (num % 2 === 0) {
          return num ** 2; // Square the even numbers
      } else {
          return num * 3; // Triple the odd numbers
      }
  });
}

// Export the function for use in other files
module.exports = { processArray };

// Task 2: Function to format strings based on processed numbers
function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
      if (numbers[index] % 2 === 0) {
          return str.toUpperCase(); // Capitalize the string if the number is even
      } else {
          return str.toLowerCase(); // Convert the string to lowercase if the number is odd
      }
  });
}

// Export the additional function
module.exports = { processArray, formatArrayStrings };
