function alternatingCharacters(s) {
  let last = s[0];
  let deleteCount = 0;
  for(let i = 1; i < s.length; i++){
    if(s[i] === last) deleteCount++;
    else {
      last = s[i];
    }
  }
  return deleteCount;
}

console.log(alternatingCharacters('AAAA')) 
console.log(alternatingCharacters('BBBBB'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('BABABA'))
console.log(alternatingCharacters('AAABBB'))
// 3
// 4
// 0
// 0
// 4