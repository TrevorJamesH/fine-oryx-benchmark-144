export default function scrabBag(letters){
  let bag = new Scrab
  bag.remove(letters)
  return(bag.output())
}

class Scrab{
  constructor(){
    this.a = 9
    this.b = 2
    this.c = 2
    this.d = 4
    this.e = 12
    this.f = 2
    this.g = 3
    this.h = 2
    this.i = 9
    this.j = 1
    this.k = 1
    this.l = 4
    this.m = 2
    this.n = 6
    this.o = 8
    this.p = 2
    this.q = 1
    this.r = 6
    this.s = 4
    this.t = 6
    this.u = 4
    this.v = 2
    this.w = 2
    this.x = 1
    this.y = 2
    this.z = 1
    this._ = 2
  }

  remove(letter){
    letter.toLowerCase().split('').map((letter) => {
      if(this[letter]>=0){
        this[letter]--
      }
    })
  }

  output(){
    let remaining = {}
    for(let i = 12;i >= -1;i--){
      for(let j = 0; j < 27; j++){
        if(this[Object.keys(this)[j]] === i){
          if(!remaining[i]){
            remaining[i] = []
          }
          remaining[i].push(Object.keys(this)[j])
        }
      }
    }
    Object.keys(remaining).map((key) => remaining[key] = remaining[key].join(',').toUpperCase())
    if(remaining[-1]){return 'impossible'}
    return remaining
  }

}
