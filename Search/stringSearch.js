function strSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
        // console.log(short[j],long[i+j]);
      if (short[j] !== long[i + j]) {
        //   console.log('break');
        break; //start on j=0
      }
      if (j === short.length - 1) {
        //   console.log('found one');
        count++;
      }
    }
  }

  return count;
}

console.log(strSearch("lorie loled lol  lol", "lol"));
console.log(strSearch("lorie loled lol  lol", "pop")); 