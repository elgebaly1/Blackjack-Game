// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 10
let secondCard = 11
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard
console.log(sum)
let hasBlackJack = false
let isAlive = true
if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
}else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
}else {
    console.log("You're out of the game! 😭")
    isAlive = false
}
console.log(hasBlackJack)
console.log(isAlive)
// let age = 22
// if (age <= 20){
//     console.log("You can not enter the club!")}
// else{
//     console.log("welcome!")
// }

// let age = 100
// if (age < 100) {
//     console.log("Not elegible")
// }else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not elegible, you have already gotten one")
// }