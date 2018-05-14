const cards = [
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

const deck = document.getElementsByClassName(".deck");
const cards = deck.getElementsByTagName("li");
const icon = deck.getElementsByTagName('i');
const checkedCardsArray = [];
const matchedCardsArray = []; //pairs are here
let moves = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

/*** Shuffling card's icons means shuffling classes between <i> tag. ***/
function initialize(){ //This function put together: shuffling, puting it to the DOM, event listener.
const shuffledCards = shuffle(cards); //Shuffling `cards` array with given shuffle function.
for (let i = 0; i <= shuffledCards.length; i++) { //Looping through all shuffled `cards` array.
  card.removeClass(); //This should make empy classes: <i class=""></i>
  card.addClass('shuffledIcons[idx]'); //Filling the empty class with shuffled ones.
};

/*** To be alble to click a card, the Event Listener is needed ***/
const clickCardEvent = $(".card");
clickCardEvent.addEventListener("click", function(){
  /*** What should happen when the card is clicked ***/
    const cardOpenShow = icon.addClass("open show"); //Changing icon to visible class.
    checkedCardsArray.push(cardOpenShow); //Adding to checkedCardsArray array where 2 cards will be compared.
});
};

function gameFunctions() { //This function put together: if we can click, compering cards, 
/*** When the second card is added to the checkedCardsArray array, clickCardEvent should be disabled ***/
function cannotClick() {
  if (checkedCardsArray.length <= 2) {
    clickCardEvent.addEventListener("click", function(), false)
  }else{
    clickCardEvent.addEventListener("click", function(), true)
  }
};

/*** Compering 2 cards in the checkedCardsArray array ***/
function comperingCards() {
  for (let i = 0; i <= checkedCardsArray.length; i++) {
    if (checkedCardsArray[0] == checkedCardsArray[1]) { //If the cards are the same...
      icon.removeClass("open show"); //... remove classes needed to see the card...
      icon.addClass("match"); //... and change them to class that means matched cards.
      const matchedCards = icon.getElementsByClassName(".match");
      matchedCardsArray.push(matchedCards);
    } else { //If the cards are NOT the same...
      icon.removeClass("open show"); //... just remove the visible classes and leave the `card` class.
    }
  }
  checkedCardsArray.splice(0,2); //After testing cards, matched or not, the checkedCardsArray array must be empted.
  moves++ //And this whole executed function is counted as one move.
};

/*** When all of the cards are matched ***/
function allCardsMatched ()){
    if (matchedCardsArray.length == 16) {
      alert = ()"Congrats! You won 1 free internet!");
    }
};
};

function startTheGame() {
initialize();
gameFunctions();
};

startTheGame();
