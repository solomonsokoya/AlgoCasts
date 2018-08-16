// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let aCharMap = mapCharToObj(stringA);
  let bCharMap = mapCharToObj(stringB);

   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
     return false;
   }

   for(let char in aCharMap){
     if(aCharMap[char] !== bCharMap[char])
     return false;
   }

   return true;
}

function mapCharToObj(string){
  let newString = string.replace(/[^\w]/g, '').toLowerCase();
  let newObj = {};

  for(let char of newString){
    if(!newObj[char]){
      newObj[char] = 1;
    }
    else{
      newObj[char]++;
    }
  }

  return newObj
}

module.exports = anagrams;
