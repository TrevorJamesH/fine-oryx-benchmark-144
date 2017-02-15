export default function fibonacci(base,number){
  if(base === "fib"){
    return decify(number)
  }
  else if(base === "decimal"){
    return fibafy(number)
  }
}

function fibafy(number){
  let index = 0
  let result = []


  while(getFib(index+1)<number){
    index++
  }

  while(index >= 0){
    if(number >= getFib(index)){
      number -= getFib(index)
      result.push(1)
    }
    else{
      result.push(0)
    }
    index--
  }
  return result.join('')
}

function decify(number){
  number = number.split('')
  let total = 0
  for(let i = 0; i < number.length; i++){
    if(number[i] === '1'){
      total += getFib(number.length-(i+1))
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
