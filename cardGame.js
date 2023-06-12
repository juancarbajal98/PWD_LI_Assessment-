/* 
Overview 

Create a JS file that uses classes to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

Steps: 

1. Create a Deck class 

2. Create a method on the Deck class that dynamically generates each card object
example card object: {suit: "hearts", value: 2}

a card's value corresponds to the number/face card's rank

ace = 1
cards 2-10 = their number value 
jacks = 11 
queens = 12 
kings = 13 

3. card objects can be held inside an array 

4. create a method to select a random card object 

5. create a function that runs the random card method on each deck, and compares the values of the 2 random cards

6. console log both card objects, and a message declaring which one has the higher value

*/

class Deck {
  // Initialize Deck
  constructor(){
    this.cards = []
    this.suits = {
      0:'hearts',
      1:'diamonds',
      2:'clubs',
      3:'spades'
    }
    this.dynamicallyGenerateCards()
  }

  dynamicallyGenerateCards(){
    // outer loop iterates over suits, inner loops iterates over numeric value
    for(let suit=0; suit<4; suit++){
      for(let val=1; val<14; val++){
        this.cards.push({
          suit: this.suits[suit],
          value: val
        })
      }
    }
  }

  // method to pull and remove a random card from the Deck
  drawRandomCard(){
    // get random index between [1, num of cards]
    let randomIndex = Math.floor(Math.random() * ((this.cards.length-1) - 1 + 1) + 1)
    //store random card before removal
    let randomCard = this.cards[randomIndex] 
    // remove random card from this.cards
    this.cards.splice(randomIndex, 1) 
    // return random card with that card now removed from the deck so future draw will not get repeat
    return randomCard 
  }
};

/*
This simulation of the War card game:
- is played with a single deck of cards
- removes the first card that was pulled from the deck before the second card is pulled
- compares and displays the cards and result in the browser console

Assuming cards of different suits and equal numeric value have equal value, there are 3 cases for the result
*/
const warGame = (deck) => {
  // draw cards
  let randomCardOne = deck.drawRandomCard()
  let randomCardTwo = deck.drawRandomCard()

  // determine result
  let result 
  if(randomCardOne.value > randomCardTwo.value) result = 'Card One has the higer value.'
  else if(randomCardOne.value < randomCardTwo.value) result = 'Card Two has the higer value.'
  else result = 'The cards have equal value.'
  
  // output result
  console.log(`Card One: ${JSON.stringify(randomCardOne)}`)
  console.log(`Card Two: ${JSON.stringify(randomCardTwo)}`)
  console.log(result)
}

// Run game (can view output by opening cardGame.html in web browser)
let CardDeck = new Deck()
warGame(CardDeck)