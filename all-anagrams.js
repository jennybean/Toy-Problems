// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. 

function allAnagrams(string) {
  let results = [];
  
  // use recursion to add letters to a temporary letiable 
  let anagram = function(temp, current) {
    // if temporary string is complete and doesn't exist, push to results array
    if (temp.length === string.length && results.indexOf(temp) === -1) {
      results.push(temp);
    } else {
      for (let i = 0; i < current.length; i++) {
        // if not, recurse with that letter removed
        anagram(temp + current[i], current.slice(0,i).concat(current.slice(i+1)));
      }
    }
  };
  
  anagram('', string);
  return results;
}