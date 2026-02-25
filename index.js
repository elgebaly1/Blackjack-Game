// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let cards = [firstCard,secondCard]
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame(){
//     cardsEl.textContent = "cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20){
//         message = "Do you want to draw a new card?"
//     }else if (sum === 21){
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     }else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     let card = 7
//     sum += card
//     cards.push(card)
//     startGame()
// }


// Count to ten!
// We need to specify...
// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 21;  count += 1 ) {
    console.log(count)
}