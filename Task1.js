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
console.log(sumOfNumbersInString(input)); 

