module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) { return false }
  let arrBracket = str.split('');
  let stack = [];
  
  for (let i = 0; i < arrBracket.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      ( stack[stack.length - 1] === bracketsConfig[k][0] && arrBracket[i] === bracketsConfig[k][1] ) ? 
      stack.pop() : 
      ( arrBracket[i] === bracketsConfig[k][0] ? stack.push(arrBracket[i] ) : '');
    }
  }
 return  (stack.length === 0 ? true : false)
}
