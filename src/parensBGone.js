export default function parensBGone(original){
  let parenArray = original.split('')
  let checked = []
  let choppingBlock = []
  let lastParen
  let numberOfParens = 0

  for(let i = 0; i < parenArray.length; i++){
    if(parenArray[i] === '(' || parenArray[i] === ')'){
      numberOfParens++
    }
  }

  while(checked.length < numberOfParens){
    for(let i = 0; i < parenArray.length; i++){
      if (parenArray[i] === '(' && !checked.includes(i)){
        lastParen = i
      }
      if (parenArray[i] === ')' && !checked.includes(i) && parenArray[lastParen] === '('){
        checked.push(lastParen)
        checked.push(i)
        if (parenArray[lastParen - 1] === '(' && parenArray[i + 1] === ')'
            && !checked.includes(lastParen - 1) && !checked.includes(i + 1)){
          parenArray.splice(lastParen - 1, 1)
          parenArray.splice(i, 1)
          checked = []
          numberOfParens -= 2
        }
        lastParen = false
      }
    }
  }
  return parenArray.join('')
}
