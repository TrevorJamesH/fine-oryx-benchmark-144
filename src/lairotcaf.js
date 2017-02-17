export default function lairotcaf(num){
  let lairo = 1
  while(num > 1){
    lairo++
    if (num % lairo != 0){
      return 'NONE'
    }
    num = num/lairo
  }
  return lairo
}
