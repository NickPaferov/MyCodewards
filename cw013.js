function squareSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
  	sum += number ** 2; 
  }
  return sum;
}