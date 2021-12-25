function highAndLow(numbers){
  const numberArr = numbers.split(' ');
  const max = Math.max(...numberArr);
  const min = Math.min(...numberArr);
  return max + ' ' + min;
  
}