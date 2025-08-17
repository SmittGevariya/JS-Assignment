function sumOfNumbersInString(str) {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += Number(char);
    }
  }
  return sum;
}

const input = "foo8bar8cat2tc2";
console.log(sumOfNumbersInString(input));  // Output: 20



































































// function multiplenumber(str){
//     let parts=str.match(/\d+/g);

//     if(!parts) return 0;

//     let sum = 0;

//     for(let char of parts){
//         sum+=Number(char);
//     }
//     return sum;
// }

// const input = "foo12bar30cat8";
// console.log(multiplenumber(input));