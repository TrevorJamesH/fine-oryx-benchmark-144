export default function symlinks(){
  let resolved = arguments[arguments.length-1]
  for(let i = 0; i < arguments.length - 1; i++){
    resolved = resolved.replace(arguments[i].split(':')[0],arguments[i].split(':')[1])
  }
  return resolved
}
