//create function that takes in a string value and returns object



function countLetters(word) {
  var object = {};
  // split the word into an array of characters
  var word_split = word.split("");
  for (var i = 0; i < word.length; i++) {
    if (!object[word[i]]) {
      object[word[i]] = 1;
    } else {
      object[word[i]]++;
    }
  }
  delete object[" "];
return object;


  // Check if the letter is new or familiar
    // increment if familiar or set to 1 if new
}

var result = countLetters(process.argv[2]);
console.log(result);















