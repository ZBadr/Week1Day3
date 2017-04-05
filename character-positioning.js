function countLetters(word) {
  var object = {};
  // var indicies = [];
  // split the word into an array of characters
  var word_split = word.split("");
  for (var i = 0; i < word.length; i++) {
    if (!object[word[i]]) {
      object[word[i]] = {count: 1, indices: [i]};
    } else {
      object[word[i]].count++;
      object[word[i]].indices.push(i);
    }
  }
  delete object[" "];
return object;


  // Check if the letter is new or familiar
    // increment if familiar or set to 1 if new
}

  var result = countLetters(process.argv[2]);
  console.log(result);

