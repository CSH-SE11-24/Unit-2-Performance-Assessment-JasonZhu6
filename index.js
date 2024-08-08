const prompt = require('prompt-sync')()

// Welcoming
console.log("HIII! (^.^)/~~~ Welcome to my game!!! This is a game that's based on a human's daily life, you will be that character for three days, and making choice for them. \n")

let userName = prompt("But first, may I have your name (^^ゞ ")

// Instruction 
function instruction() {
  console.log(`Hello, ${userName}! \n`)

  console.log("In this game, you will be going through a human's life. Your goal is to avoid trouble and survive for just three days. \n")

  console.log("You will not be asking to enter that entire word into the game, it will be represented as a number. \n")
}

console.log("The game starts right now! Remember, every choice matter in this game. \n")

let foodInMarket = ["some fresh vegetable", "some meats", "some fruits"]

let snackInMarket = ["some gums", "some mints", "some chips"]

let foodInRestaurant = ["Salad", "Burgers", "Pizza", "Pasta", "Soup"]

let buyingList = {

}

// Function for the 3rd Day
function thirdDay() {
  console.log("It's your third day, also, it's the last day of this game. Hope you enjoy it so far... \n")

  console.log("Today, you can choose to: \n")
  console.log("1 - Doing absolute nothing but sleeping")
  console.log("2 - Play number guessing \n")

  console.log("What do you want to do today: ")
  let activity1ForThird = parseInt(prompt("> "))

  if (activity1ForThird == 1) {
    // If the user chooses to waste their last day
    console.log("You choose to waste one day. It's time to say goodbye... \n")
  } else if (activity1ForThird == 2) {
    // If the user chooses to start a Number-Guessing mini game
    console.log("Let's guess some numbers! \n")
    console.log("In this mini game, the computer will generate a number from 1 - 10. You will be asked for guessing a number until you get it correct! Don't worry, the computer will give you some hints. \n")

    let pcNum = Math.floor(Math.random() * 11)
    let userNum = parseInt(prompt("Guess a number! :"))
    let attempts = 0

    // Determine if the user got the number. It will keep running until the user got the number. 
    while (userNum != pcNum) {
      if (pcNum == userNum) {
        console.log("You get it! ")
      } else if (userNum < pcNum) {
        userNum = parseInt(prompt("Too low! Try again: "))
      } else if (userNum > pcNum) {
        userNum = parseInt(prompt("Too high! Try again: "))
      }
      attempts++
    }
    console.log(`You got it with ${attempts} attempts! `)
  }
}

// Function for 2nd Day
function secondDay() {
  console.log("It's the second day! You decide to get some groceries. You choose to go a market. \n")

  // Running through the food list in market
  console.log("They have some food: \n")
  for (let index = 0; index < foodInMarket.length; index++) {
    console.log(foodInMarket[index])
  }

  // Running through the snack list in market
  console.log("\n They also have some snack: ")
  for (let index2 = 0; index2 < snackInMarket.length; index2++) {
    console.log(snackInMarket[index2])
  }

  console.log("Do you want to get some of these? Type in the number for the item. \n")

  console.log("food0 for vegetable. \nfood1 for meats. \nfood2 for fruits. \n")
  console.log("snack0 for gums. \nsnack1 for mints. \nsnack2 for chips. \n")

  let getSomeItems

  // Determine what the user wants
  while (true) {
    getSomeItems = prompt("Type in the name: ")

    if (getSomeItems == "food0") {
      buyingList[getSomeItems] = foodInMarket[0]
    } else if (getSomeItems == "food1") {
      buyingList[getSomeItems] = foodInMarket[1]
    } else if (getSomeItems == "food2") {
      buyingList[getSomeItems] = foodInMarket[2]
    } else if (getSomeItems == "snack0") {
      buyingList[getSomeItems] = snackInMarket[0]
    } else if (getSomeItems == "snack1") {
      buyingList[getSomeItems] = snackInMarket[1]
    } else if (getSomeItems == "snack2") {
      buyingList[getSomeItems] = snackInMarket[2]
    }

    // If the user wants anything else
    getSomeItems = prompt("Anything else? Yes/No: ")

    if (getSomeItems.toLowerCase() == "yes") {
    } else {
      for (let key in buyingList) {
        console.log(`You have ${buyingList[key]} in your cart, it's time to go checkout. \n`)
      }
      break
    }
  }

  console.log("It's time to go home! \n")
  thirdDay()
}

// Function for the 1st Day
function firstDay() {
  console.log("You wake up from a good sleep. It is the first day. What do you want to do next? ")

  console.log("1 - Doing your morning routine first, then go eat breakfast. \n")

  console.log("2 - Go out of the house and do something else. \n")

  console.log("3 - Stay in bed for the whole day, doing nothing. \n")

  let activity1ForFirst = parseInt(prompt(">"))

  // Determine what the user wants to do
  if (activity1ForFirst == 1) {
    // If the user chooses activity 1
    console.log("Great choice! Washing you face and brushing your teeth make you feel fresh and clean. Then, you make a delicious breakfast for yourself (^_^). \n ")
    console.log("Then, you spend your whole day doing something else. It's time to sleep! \n")

    secondDay()
  } else if (activity1ForFirst == 2) {
    // If the user chooses activity 2
    console.log("You didn't eat anything, your stomach is complaining. You decided (or have to) to get some food. You choose to go a restaurant. \n")
    console.log("What do you want to eat in this restaurant? They have: ")
    console.log(foodInRestaurant)
    console.log("\n")
    let choiceForFood = prompt("Pick one: ")

    console.log(`\n This ${choiceForFood} is delicious! Then, you go back home and sleeping. `)

    secondDay()
  } else if (activity1ForFirst) {
    // If the user chooses activity 3 (which is doing nothing but staying in bed)
    console.log("You are so hungry, but you choose to stay in bed. You pass out. ")
  }
}



// Start the game
function playGame() {
  instruction()
  firstDay()
}

playGame()

let askingForPlay

// Determine if the user wants to restart the game
while (true) {
  askingForPlay = prompt("Do you want to play this game again? Yes/No")

  if (askingForPlay.toLowerCase == "yes") {
    playGame()
  } else {
    console.log(`Goodbye!! Hope you enjoy this game (^^)/`)
    break
  }
}