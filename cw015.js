function remainder(a, b){
  if (a > b && b === 0) {
    return NaN;
  } else if (b > a && a === 0) {
    return NaN;
  }
  return (a > b) ? a % b : b % a;
}