var overwatchTerms = ["Tracer", "Zarya", "Hanamura", "Lucio", "Winston", "Omnic", "Hanzo", "Junkrat", "Talon", "Pharah", "Bastion", "Choke", "Torbjorn", "Reinhardt", "Valkyrie", "Widowmaker", "Nerf", "Tranquility", "DVa"]

var guesses = [];
var wins = 0;
var loses = 0;
var lives = 5;
var res;
var split;
var answerArray;
// var userLetter = [];
var answerSplit;
var word;
var rightWord = [];
var userKeyInput;

document.getElementById("genTerm").onclick = function grabWord(){
  //first we need to pull a random word from the array
  word = overwatchTerms[Math.floor(Math.random() * overwatchTerms.length)];
  //then we need to make each letter lowercase
  res = word.toLowerCase();
  //set up answer answerArray
  //then we need to make each letter come out as a dash
  answerArray = [];

  for (var i = 0; i < res.length; i++){
    answerArray[i] = "_";

    split = answerArray.join(" ");
    answerSplit = res.split("");
    console.log(answerSplit);
  }

remainingLetters = res.length;

document.getElementById("termPlaced").innerHTML = split;

}

//some of the following code was taken from an online resource, and supposedly saves the pressed keyboard key to an array. i was hoping to make a function that checks both arrays for similarities, and if it comes up with one then the letter is revealed, but i've been unsuccesful.
document.addEventListener('keyup', (function gameKeyup(event) {

  //converts unicode key value into a string
    var userKeyInput = String.fromCharCode(event.keyCode);
    console.log(userKeyInput);

  // if users guess is right, switch out the letters
  //what did I do wrong?
    if (answerArray.indexOf(userKeyInput) > -1) {


      rightWord.push(userKeyInput);} }));






//EXTRA JUNK


// if (typeof event !== 'undefined') {
  //   keyPress = event.keyCode;
  // }
  // else if (e) {
  //   keyPress = e.which;
  // }
  //
  // userLetter.push(String.fromCharCode(keyPress));
  // console.log(userLetter);
  //
  // return false;   // Prevents the default action

// for (var i = 0; i < b.length; i++) {
//   if (b[i] === userLetter[i]) {
//     answerArray[i] = userLetter[i];
//     remainingLetters--;
//   }


    //splitting the string created above into an array, where each segment is a letter of the string
    //create an array equal to the same length as the word that was chosen by the computer, look up joining with spaces
   // var pullArray = s.split(" ");












// document.onkeyup = function userSubmit() {
//     var keyPress;
//
//     if (typeof event !== 'undefined') {
//       keyPress = event.keyCode;
//     }
//     else if (e) {
//       keyPress = e.which;
//     }
//
//     userLetter.push(String.fromCharCode(keyPress));
//
//     return false;   // Prevents the default action
//
//   for (var i = 0; i < res.length; i++) {
//     if (res[i] = userLetter[i]) {
//         answerArray[i] = userLetter;
//     }
//   }
//
// }



      // var userGuess = event.key;
      // for (var j = 0; j < userGuess.length, j++) {
      // var g = userGuess.join(" ");
      // }
            //checking entire array to see if it equals the user input, if it doesnt then lives goes down
      // if (userGuess > 0) {
        // for (var i = 0; i < s.length; i++) {
          // if (s[i] = userGuess) {
            // answerArray[i] = userGuess;
            // document.getElementById("termPlaced").innerHTML = s;







      //       truth = true;
      //     }
      //     else {
      //       falsity = false;
      //       lives--;
      //     }
      // // if a section of the array equals the user input, reveal it
      //     if (truth = true) {
      //       answerArray[i] != "_";
      //     }
      // // if nothing in the answerArray is "_" and your lives arent at 0 then your win counter goes up, else your loss counter goes up
      //     if (answerArray != "_" && lives != 0) {
      //       wins++;
      //     }
      //     else {
      //       losses++;
      //     }
      //
      //     }
      //   }




// function myFunction() {
//   var x = document.getElementById("frm1");
//   var text = "";
//   for (var i = 0; i < x.length; i++) {
      //+= means that youre adding on to something, appending
      //.value registers what is in the element
//       text += x.elements[i].value + "<br>";
//   }
// }


//create function that generates word when clicked
//store word generated by function
//create user input field to submit letter guess
//have script check if it corresponds with any letter in the word generated by the first function
//if yes, show letter. if no, life count goes down.
//when life count reaches zero you lose
// when all letters are shown you win.



// function processForm(e) {
//     if (event.preventDefault) event.preventDefault();
//
//     /* do what you want with the form */
//
//     // You must return false to prevent the default form behavior
//     return false;
// }
//
// var form = document.getElementById('my-form');
// if (form.attachEvent) {
//     form.attachEvent("submit", processForm);
// } else {
//     form.addEventListener("submit", processForm);
// }


   //now we need to make the user input part
   // var lettersLeft = res.length;
//
// //game loop
//      if (lettersLeft > 0) {
//        //show progress
//        var ll = document.getElementById("here");
//        ll = innerhtml = answerArray.join(" ");
//
//     //create a user prompt to enter words
//
//     var guess = prompt("Guess what the letter is, or press cancel to give up!")
//
//     if(guess === null) {
//       //exit game loop
//       break;
//         }
//         else if (guess.length !=== 1) {
//           alert("Please Enter a Single Letter");
//         }
//         else {
//           //updating game
//           for (x = 0; x < res.length; x++) {
//             if (res[j] === guess) {
//               answerArray[x] = guess;
//               lettersLeft--;
//             }
//           }
//         }
//
// //end of game loop
//     }
// ll.innerHTML = answerArray.join(" ");
// alert("Good job!")
//
// }
