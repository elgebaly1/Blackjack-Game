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
//     cardsEl.textContent = "cards: "
//     for (let i = 0; i < cards.length ; i++){
//         cardsEl.textContent += cards[i] + " "
//     }
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

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

function totalRaceTime(){
    return player1Time + player2Time
}
let tRaceTime = totalRaceTime()
console.log(tRaceTime)
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out