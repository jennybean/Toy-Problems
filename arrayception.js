// Arrayception
// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

function arrayception(array){
  var nest = 0;
  var count; // Temporary value to track nested arrays
  
  for (var i=0; i < array.length; i++){  
  	// Check for empty array
    if (array[i].length === 0){ count = 0;
    
    // Check if the array contains nested arrays
    else if (Array.isArray(array[i])){
      // Recurse through array to update count
      count = arrayception(array[i]);
      if (count){ 
      	count++;
      }
    }
    else {
      count = 1;
    }

    
    nest = Math.max(count, nest); // Return higher amount
  }
  return nest; 
}