/*
 * Create a list that holds all of your cards
 */
const cards = [
'fa fa-diamond',
'fa fa-paper-plane-o',
'fa fa-anchor',
'fa fa-bolt',
'fa fa-cube',
'fa fa-anchor',
'fa fa-leaf',
'fa fa-bicycle',
'fa fa-diamond',
'fa fa-bomb',
'fa fa-leaf',
'fa fa-bomb',
'fa fa-bolt',
'fa fa-bicycle',
'fa fa-paper-plane-o',
'fa fa-cube'];

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
// Shuffle cards array
const shuffledCards = shuffle(cards);

// loop through each card and create its HTML
for (let i = 0; i <= cards.length; i++) {
	let cardsInside = document.getElementsByClassName('card'); //w jaki sposób program ma znaleźć te miejsce do zmiany
	cardsInside.innerHTML(shuffledCards); //jak już znajdzie, co ma z tym zrobić
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Parametry samej gry
const matchTestArray = []; //array for clicked titles (other function should restrict number of flipped titles)
const timer = 0;
const moveCounter = 0;

//W grze są wykorzystywane 3 klasy: 
//"card open show"->po kliknięciu widać kartę
//"card match"-> karty już określone jako dopasowane
//"card"->zakryta karta
//wszystkie karty przechodzą 3 stany: zakryta - pokazana - dopasowana

//po kliknięciu przenosi kartę do matchTestArray
$(.deck).addEventListener('click', function matchTestArray()





