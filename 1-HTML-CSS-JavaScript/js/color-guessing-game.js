const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow']
const getColorArea = document.getElementById("colorArea")

function runGame(){
let numTries = 0;
let guess = "";
let correct = false;
let wrongGuess = 0;
const targetIndex = Math.floor(Math.random()*10)+1;
const target = COLORS_ARRAY[targetIndex];
const sortArray = COLORS_ARRAY.sort().join(', ')
console.log(target)
  do{
    guess = prompt('I am thinking of one of these colors:\n'+ '\n'+ sortArray + '\n'+ '\n' + 'What color am I thinking of?\n')
 
    console.log(guess)
    if ( guess === null ){ 
      alert("The game has been aborted!")
      return;
    }
     let guessLowerCase = guess.toLowerCase();
    correct = checkGuess(guessLowerCase,target)
    if(correct === false){ ++wrongGuess}
    ++numTries
  } while (!correct)
   alert("Congratulations! You have guessed the color!\n" + '\n' + "It took you "+ numTries + " guesses to finish the game!\n"+ '\n'+ "\n Hit OK to see the color in background.");
     getColorArea.style.background = guess;
}


function checkGuess(guessLowerCase,target){
  let correct = false;
    if(!(COLORS_ARRAY.includes(guessLowerCase)))
    {
      alert("I don't recognize that color")

    } else if ( guessLowerCase > target) 
    {
    alert("Sorry, your guess is incorrect.\n" + '\n'+ "Hint: your color is alphabetically lower than mine\n" + '\n'+ "Please try again.")

    } else if ( guessLowerCase < target) 
    {
    alert("Sorry, your guess is incorrect.\n" + '\n'+ "Hint: your color is alphabetically lower than mine\n" + '\n'+ "Please try again.")
 
    } else 
    { 
      correct = true 
    }
  return correct;
}
