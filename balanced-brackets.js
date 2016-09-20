// Balanced Brackets
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

function isBalanced (str) {
  let parens = "[]{}()";
  let arr = [];

  for(let i = 0; i < str.length; i++) {
  	let letter = str[i];
    let index = parens.indexOf(letter);

    if(index < 0) continue;

    if(index % 2 === 0) {
      arr.push(index + 1); 
    } else {
      if(arr.pop() !== index) {
        return false;
      }
    }
  
  }

  return arr.length < 1;
}




