/*
 * Create a list that holds all of your cards
 */
const icons = [
"fa fa-diamond",
"fa fa-paper-plane-o",
"fa fa-anchor",
"fa fa-bolt",
"fa fa-cube",
"fa fa-anchor",
"fa fa-leaf",
"fa fa-bicycle",
"fa fa-diamond",
"fa fa-bomb",
"fa fa-leaf",
"fa fa-bomb",
"fa fa-bolt",
"fa fa-bicycle",
"fa fa-paper-plane-o",
"fa fa-cube"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Timer:
let timer = document.querySelector(".timer");
let interval;
let second = 0;
let minute = 0;
let timeStart = false;

//Creating deck of cards with icons:
const cardsContainer = document.querySelector(".deck");
let openedCards = [];
let matchedCards = [];

/*
 * Initializing the game:
 */
function init(){
  $('.deck').empty();
  const shuffleIcons = shuffle(icons);
  for (let i = 0; i <icons.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = '<i class="' + icons[i]+ '"></i>'
    cardsContainer.appendChild(card);

    //Add click event to each card:
    click(card);

    //Timer setup:
    resetTimer();
	timer.style.display = "none";
	timeStart = false;
	timer.textContent = minute + " minutes " + second + " seconds";
  }
}

/*
 * Click event:
 */
function click(card){
  card.addEventListener("click", function() {
    if (!timeStart) {
    		startTimer();
    		timeStart = true;
    		timer.style.display = "inline-block";
    	}
    const currentCard = this;
    const previousCard = openedCards[0];

    //we have an existing opened card:
    if(openedCards.length === 1) {
      card.classList.add("open", "show", "disable");
      openedCards.push(this);

      //we shlould compare 2 cards:
      compare(currentCard, previousCard);

    } else {
      card.classList.add("open", "show", "disable");
      openedCards.push(this);
      addMove();
    }
  });
}

/*
 * Compare the cards:
 */
function compare(currentCard, previousCard){
  if(currentCard.innerHTML === previousCard.innerHTML) {
    //matched
    currentCard.classList.add("match");
    previousCard.classList.add("match");
    matchedCards.push(currentCard, previousCard);
    openedCards = [];

    //check if the game is isOver
    isOver();

  } else {
    setTimeout(function(){
      currentCard.classList.remove("open", "show", "disable");
      previousCard.classList.remove("open", "show", "disable");
      openedCards = [];
    }, 400);
  }
}

 function isOver() {
   let starsNum = "";
   if (starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>'){
     starsNum = "2";
   } else if (starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li>') {
     starsNum = "1";
   } else {
     starsNum = "3";
   }

   if(matchedCards.length === icons.length) {
     swal({
         closeOnEsc: false,
         allowOutsideClick: false,
         title: 'Success!',
         text: 'You won in ' + moves + ' moves what give u ' + starsNum + ' stars. Your time is '  + timer.textContent +'.',
         icon: 'success',
         button: 'Play again!'
         }).then(function(isConfirm) {
       		if (isConfirm) {
            starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
            movesStars.innerHTML = 0;
            moves = 0;
            init();
       		}
       	})
   }
 }

/*
 * Moves counting:
 */
const movesStars = document.querySelector(".moves");
let moves = 0;
moves.innerHTML = 0;

function addMove() {
  moves++;
  movesStars.innerHTML = moves;

  //starts thing
  starsRaiting();
}

/*
 * Star raiting:
 */
const starsContainer = document.querySelector(".stars");
function starsRaiting(){
  switch(moves){
    case 17:
      starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
    break;
    case 23:
      starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li>';
    break;
  }
}

/*
 * Timer section:
 */

// Zero position:
function resetTimer() {
  clearInterval(interval);
  second = 0;
  minute = 0;
}

// Start timer:
function startTimer() {
 	interval = setInterval(function() {
 		timer.textContent = minute + " minutes " + second + " seconds ";
 		second++;
 		if (second === 60) {
 			minute++;
 			second = 0;
 		}
 	}, 1000)
 }

/*
 * Restart game button:
 */
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function() {
  //remove all cardsContainer:
  cardsContainer.innerHTML = "";

  //initialize new game:
  init();

  //reset all variables:
  openedCards = [];
  matchedCards = [];
  moves = 0;
  movesStars.innerHTML = moves;
  starsContainer.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
  resetTimer();
  	timer.style.display = "none";
  	timeStart = false;
  	timer.textContent = minute + " minutes " + second + " seconds";
});

 //Start the game for the 1st time:
init();

//Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
