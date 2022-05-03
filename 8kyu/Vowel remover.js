function shortcut(string){
let vowels = 'aeiou';

let result = [];

  for (let i = 0; i < string.length; i++) {
  if (!vowels.includes(string[i])) {
    result.push(string[i]);
  }
}
  return result.join('');
};