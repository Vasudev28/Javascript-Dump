//USING METHODS, IF SAID AT END WE CAN USE 'PUSH' AND IF SAID AT THE BEGINNING THEN WE CAN USE 'UNSHIFT'

var a=[1,2,3,5,6,90,12,15];
a.splice(3,0,"vanakkam");
console.log(a);

//WITHOUT METHODS

function insertAt(arr, element, index) {
    // Check for valid index
    if (index < 0 || index > arr.length) {
      throw new Error("Invalid index");
    }
  
    // Create a new array to hold the modified elements
    const newArr = [];
  
    // Loop through the original array
    for (let i = 0; i < arr.length; i++) {
      // If we reach the insertion index, insert the new element
      if (i === index) {
        newArr.push(element);
      }
      // Copy elements before the insertion index
      if (i < index) {
        newArr.push(arr[i]);
      }
      // Copy elements after the insertion index (shifted one position)
      if (i > index) {
        newArr.push(arr[i - 1]);
      }
    }
  
    return newArr;
  }
  
  const colors = ["red", "green", "blue"];
  const newColor = "yellow";
  const insertIdx = 1;
  
  const modifiedColors = insertAt(colors, newColor, insertIdx);
  
  console.log(colors); // Output: ["red", "green", "blue"] (original remains unchanged)
  console.log(modifiedColors); // Output: ["red", "yellow", "green", "blue"]
  
