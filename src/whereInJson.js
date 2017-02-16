export default function whereInJson(json, key){
  let toCheck = [{'value':json,'path':[]}]

  while(toCheck.length > 0){
    if(toCheck[0]['value'] === key){
      return toCheck[0]['path'].join(' -> ')
    }

    if(typeof toCheck[0]['value'] === 'object'){
      Object.keys(toCheck[0]['value']).forEach((child) =>
      toCheck.push({'value':toCheck[0]['value'][child],'path':toCheck[0]['path'].concat([child])}))
    }
    toCheck.shift()
  }
  return "Not Found"
}
