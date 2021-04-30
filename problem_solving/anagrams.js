// function validAnagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     str1 = str1.toLowerCase().split('').sort().join('');
//     str2 = str2.toLowerCase().split('').sort().join('');
//     return str1=== str2;
// }

//best

// function validAnagram(str1,str2){
//       if(str1.length !== str2.length){
//         return false;
//     }
//     const str1Count = countStr(str1);
//     const str2Count = countStr(str2);

//     for (const key in str1Count) {
//         if(str1Count[key] !== str2Count[key]){
//             return false;
//         }
//     }
//     return true;

// }

// function countStr(str){
//     const strCount = {};
//     for (const char of str.toLowerCase()) {
//         strCount[char] = strCount[char]++ || 1;// strCount[char] ?  strCount[char] +=1 :  strCount[char]=1;
//     }
//     return strCount;
// }

//O(n^2)
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (const char of str1.toLowerCase()) {
//     if (str2.toLowerCase().indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i].toLowerCase();
    //if letter exists , increment , otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i].toLowerCase();

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1; //decrement
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zaza"));
console.log(validAnagram("anagram", "nagram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesom", "awesome"));
console.log(validAnagram("Qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
