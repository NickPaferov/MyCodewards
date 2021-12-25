function findShort(s){
  const result = s.split(' ').map(word => word.length).sort((a, b) => a - b);
  return (result[0]);
}