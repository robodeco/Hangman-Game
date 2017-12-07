// display a page that welcomes the viewer

// on said page, display instructions

// display input box for user to guess a letter

// display dashes that indicate what the word is

//  THE FOLLOWING CODE HAS BEEN TAKEN FROM AN ONLINE VIDEO. IN ORDER TO BETTER UNDERSTAND WHAT IT IS AN INSTRUCTOR'S HELP IS REQUIRED, AS I DONT FULLY UNDERSTAND WHATS GOING ON. ALSO, AFTER FOLLOWING THE VIDEO'S INSTRUCTIONS TO THE LETTER, THE GAME DOESNT WORK.

  // words will be based on a theme. for now let's say Overwatch.
  // words chosen by the computer will be saved in an array, and will be chosen randomly.
var overwatchTerms = ["Tracer", ];
  // this picks a random term from the array, but im having difficulty understanding the logic. math.floor supposedly rounds a number down to its nearest integer, while math.random picks a random number between 0 and 1. then we're multiplying that integer by the number of items in overwatchTerms to get the random word? how does that work?
  var randomAnswer = overwatchTerms[Math.floor(Math.random() * overwatchTerms.length)];

  var rand = Math.random() * overwatchTerms.length;
  console.log(rand);

  var floorRand = Math.floor(rand)
  

  var s;
  //this array will store the answers
  var playerInput = [];
  var count = 0;

// this fills the answer array with under scores but once again I dont understand the vocab. the number of underscores also equals the number of letters, but I cant pick out just where it does that! all i can see is that upon startup the script will go through a for loop that will pick a word from randomAnswers, with im guessing the number of characters that that word is? kind of like how overwatchTerms in the randomAnswer variable above is writing out a random word from a much larger pool? so i guess its about scale?
  function startUp() {
    for (var i = 0; i < randomAnswer.length; i++) {
      playerInput[i] = "_";
    }
    s = playerInput.join(" ");
    document.getElementById("answer").innerHTML = s;
  }

  function Letter() {
    //here is the letter that the user typed into the box?
    var letter = document.getElementByID("letter").value

    if (letter.length > 0){
      for (var i = 0; i < randomAnswer.length; i++) {
        //if the randomanswer contains a letter that the user typed in
        if (randomAnswer[i] === letter){
          //assign it to a letter
          playerInput[i] = letter;
        }
      }
      //here is how many times it takes to guess
      count++;
      document.getElementById("counter").innerHTML = "no of clicks: " + count;
      document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if(count>5) {
      document.getElementById("stat").innerHTML = "you lose!";
    }
  }





  // letters in the words will be hidden until the correct letter is chosen by the user
  // number of dashes will correspond to number of letters in the words
  // letters guessed will be saved in an array and displayed for the user to see
  // bonus** also include a box for the user to guess the entire word to "bet it all"

// if letter is wrong player loses a "life", displayed as "guesses remaining"

// if letter is right it is displayed on the corresponding dash in the bar

// once user guesses all letters to the word they win

// if life counter reaches 0 after 5 times they lose

// win or lose the user has the option to reset and play again

// game will save number of saves and losses
