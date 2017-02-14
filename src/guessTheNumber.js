function guessTheNumber(){
  let number = Math.floor(Math.random()*100)+1
  console.log('Guess a number between 1 and 100')
  guess(number)
}

function guess(number){
  var prompt = require('prompt');
  prompt.start();
  prompt.get(['guess'], function (err, result) {
    if(result.guess > number){
      console.log(result.guess + ' is too high, guess lower')
      guess(number)
    }
    else if(result.guess < number){
      console.log(result.guess + ' is too low, guess higher')
      guess(number)
    }
    else if(result.guess == number){
      console.log('Correct!')
    }
  });
}

guessTheNumber()
