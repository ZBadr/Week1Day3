function countLetters(word) {
  var noSpaces = word.join("").toLowerCase();
  var object = {};
  // var indicies = [];
  // split the word into an array of characters
  //var word_split = word.split("");
  for (var i = 0; i < noSpaces.length; i++) {
    if (!object[noSpaces[i]]) {
      object[noSpaces[i]] = {count: 1, indices: [i]};
    } else {
      object[noSpaces[i]].count++;
      object[noSpaces[i]].indices.push(i);
    }
    //console.log(object);
  }
  //delete object[" "];
return object;


  // Check if the letter is new or familiar
    // increment if familiar or set to 1 if new
}

  var result = countLetters(process.argv.slice(2));
  console.log(result);

