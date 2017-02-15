export default function fibonacci(base,number){
  if(base === "fib"){
    return decify(number)
  }
  else if(base === "decimal"){
    return fibafy(number)
  }
}

function fibafy(number){
  let index = 10
  let result = []
  let first = false

  while(index >= 0){
    if(number >= getFib(index)){
      number -= getFib(index)
      result.push(1)
      first = true
    }
    else if(first === true){
      result.push(0)
    }
    index--
  }
  return result.join('')
}

function decify(number){
  number = number.split('')
  let total = 0
  for(let i = number.length - 1; i >= 0; i--){
    if(number[i] === '1'){
      total += getFib(i)
    }
  }
  return total
}

function getFib(index){
  if(index === 0){
    return 1
  }
  else if(index === 1){
    return 1
  }
  else{
    return getFib(index - 1) + getFib(index -2)
  }
}
