// Alphabet Inventory 
// Given an alphabet and a string of text, write a method that counter the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

function alphaCount (alphabet, text) {
  text = text.toLowerCase();
  alphabet = alphabet.toLowerCase();

  // Count of each letter defined in alphabet
  var counter = {};

  for(var i = 0; i < text.length; i++){
    var current = text[i];
    
    if(alphabet.indexOf(current) !== -1){
      if(!counter.hasOwnProperty(current)){
      counter[current] = 1;
      } else {
        counter[current] += 1
      }
    }
  }

  // Return if there are no matches
  if(!Object.keys(counter).length) return "no matches";

  //Use alphabet for the ordering that the tests expect
  var results = '';

  for(i = 0; i < alphabet.length; i++){
    current = alphabet[i];
    
    if(counter.hasOwnProperty(current)){
      results += current + ":" + counter[current] + ",";
    }
  }

  return results.slice(0, -1);
}
