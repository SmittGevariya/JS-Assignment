function sumOfStringNumbers(str) {
  const parts = str.split(',');

  let sum = 0;
  for (let part of parts) {
    sum += parseFloat(part.trim());  
  }

  return sum;
}

const input = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log(sumOfStringNumbers(input));          
