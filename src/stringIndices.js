export default function stringIndices(sentence, index){
  sentence = sentence.replace(/[^\w\s]|_/g, "")
  return sentence.split(' ')[index-1]
}
