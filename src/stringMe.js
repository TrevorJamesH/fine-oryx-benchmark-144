export default function stringMe(string){
  let currentLetter = string[0]
  let subString = []
  let subStrings = []
  for(let i = 0; i < string.length; i++){
    if(string[i] === currentLetter){
      subString.push(string[i])
    }
    if(string[i] != currentLetter){
      subStrings.push(subString)
      subString = [string[i]]
      currentLetter = string[i]
    }
  }
  subStrings.push(subString)

  let longestPair = 0
  for(let i = 0; i < subStrings.length - 1; i++){
    if(subStrings[i].length + subStrings[i + 1].length
      > subStrings[longestPair].length + subStrings[longestPair + 1].length){

      longestPair = i
    }
  }
  return subStrings[longestPair].concat(subStrings[longestPair + 1]).join('')
}
