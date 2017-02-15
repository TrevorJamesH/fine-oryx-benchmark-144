export default function disemvowling(sentence){
  return sentence.split('').filter((character)=>!character.match(/[aeiou ]/)).join('')
}
