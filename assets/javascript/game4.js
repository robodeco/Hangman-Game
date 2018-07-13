var overwatchTerms = ["Tracer", "Zarya", "Hanamura", "Lucio", "Winston", "Omnic", "Hanzo", "Junkrat", "Talon", "Pharah", "Bastion", "Choke", "Torbjorn", "Reinhardt", "Valkyrie", "Widowmaker", "Nerf", "Tranquility", "DVa"]

var word;
var randomWordArray = [];
var guessedLetter = [];
var tempArrHolder;
var lifeCount = 5;
var winCount = 0;
var loseCount = 0;


$(".letterOp").prop('disabled', true);

$("#genTerm").on("click", function grabWord() {

  var upperCase;
  var ucSplit;
    word = overwatchTerms[Math.floor(Math.random() * overwatchTerms.length)];
    upperCase = word.toUpperCase();
    ucSplit = upperCase.split("")
    randomWordArray = ucSplit;
    console.log(randomWordArray + " rwa")

  displayDash()
  $(".letterOp").prop('disabled', false);
  $("#lCo").html(loseCount)
  $("#wCo").html(winCount)
  $("#winLoseBox").html("")
  $("#genTerm").html("Good Luck!")
  $("#genTerm").prop('disabled', true);
  $(".letterOp").prop('disabled', false);
  $("#placeImg").empty();
})

function displayDash() {

  var tempArrVar = []

    randomWordArray.forEach(function (letter) {
      letter = "__";
      tempArrVar.push(letter)
    })
  tempArrHolder = tempArrVar;
  $("#termPlaced").html(tempArrHolder.join(" "));
  $("#lifeCounter").html(lifeCount)
}

$(".letterOp").on("click", function guessLetter () {

  var thisID = $(this.id);
  var thisValue = $(this).val();
  var truFalse = false;

  $(this).prop('disabled', true);
  guessedLetter.push(thisValue)

  for (i = 0; i < randomWordArray.length; i++) {
    if (thisValue === randomWordArray[i]) {
      tempArrHolder[i] = randomWordArray[i];
      truFalse = true;
      $(this).removeClass("btn-outline-warning").addClass( "btn-warning" )
    }
  }

  if (truFalse === false) {
    --lifeCount;
    $(this).removeClass("btn-outline-warning").addClass("btn-danger")

      switch (lifeCount) {
        case lifeCount = 4:
          $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPic1.png'>`);
          break;

          case lifeCount = 3:
            $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPic2.png'>`);
            break;

          case lifeCount = 2:
            $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPic3.png'>`)
            break;

          case lifeCount = 1:
            $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPic4.png'>`)
            break;

          case lifeCount = 0:
            $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPicLose.png'>`)
            break;
      }
  }

  if (lifeCount == 0) {
    ++loseCount;
    lifeCount = 5;
    tempArrHolder = randomWordArray;
    $("#genTerm").html("Play Again?")
    $("#genTerm").prop('disabled', false);
    $(".letterOp").prop('disabled', true);
    $(".letterOp").removeClass("btn-danger btn-warning btn-outline-warning")
    $(".letterOp").addClass("btn-outline-warning")
  }
  else if (! tempArrHolder.includes("__") && tempArrHolder != null && lifeCount != 0) {
    lifeCount = 5;
    ++winCount;
    $("#genTerm").html("Play Again?")
    $("#genTerm").prop('disabled', false);
    $(".letterOp").prop('disabled', true);
    $(".letterOp").removeClass("btn-danger btn-warning btn-outline-warning")
    $(".letterOp").addClass("btn-outline-warning")
    $("#placeImg").html(`<img class='hangPic' src='assets/images/HangmanPicWin.png'>`)
  }
  $("#lCo").html(loseCount)
  $("#wCo").html(winCount)
  $("#lifeCounter").html(lifeCount)
  $("#termPlaced").html(tempArrHolder.join(" "));
})
