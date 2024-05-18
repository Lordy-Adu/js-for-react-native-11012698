# JavaScript Array Manipulation and User Profile Creation

## Student ID: 11012698

### Task 1: Array Manipulation
- **File:** `arrayManipulation.js`
- **Function:** `processArray`
- **Description:** 
  - Takes an array of numbers as an argument.
  - Returns a new array where each even number is squared and each odd number is tripled.

### Task 2: String Formatting Based on Numbers
- **File:** `arrayManipulation.js`
- **Function:** `formatArrayStrings`
- **Description:** 
  - Takes an array of strings and an array of numbers (processed by `processArray`).
  - Modifies each string based on its corresponding number: 
    - Capitalizes the string if the number is even.
    - Converts the string to lowercase if the number is odd.

### Task 3: Creating User Profiles
- **File:** `userInfo.js`
- **Function:** `createUserProfiles`
- **Description:** 
  - Takes an array of names and an array of modified names.
  - Returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).

### Usage
1. **Importing Functions:**
   ```javascript
   const { processArray, formatArrayStrings } = require('./arrayManipulation');
   const { createUserProfiles } = require('./userInfo');
