const diceFrame = document.getElementById("diceFrame"); //getting the die
newTurn.style.display = "none"; //nextTurn button is invisible
dieBlocker = document.getElementById("dieBlocker"); //getting the die blocker. this is so a player can't roll twice, they have to move to next player

let p1 = document.getElementById("player1"); //getting player 1
let p2 = document.getElementById("player2"); //getting player 2
let result = document.getElementById("winnerMessageBlock"); //the winner screen
let start = document.getElementById("startScreen"); //the start screen

let p1spotMove = 0; //player 1 moved 0
let p2spotMove = 0; //player 2 moved 0
let player1Spot = 0; //player 1 postition
let player2Spot = 0; //player 2 position
let spin = 0; //zero degrees -- for die spin

//THIS IS FOR ROLLING DICE
class randomPicker {
  items;

  constructor(items) {
    //store the use set of items
    this.items = items;
  }

  //returns a random entry in the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

//lets start with player 1
let player = 1;
let playerRoll = 1; //player 1 is rolling first -- switches from 1 to 2
//now making dice
class diceRoll extends randomPicker {
  outputElement;
  constructor(element) {
    super([1, 2, 3, 4, 5, 6]); //these are all of the possiblities of rolling a dice
    this.outputElement = element; //this gets the number
  }

  //roll function that randomly picks roll number
  roll() {
    let rolled = this.pickRandom(); //dice roll...getting random number
    // //shows output to user
    if (playerRoll === 1) {
      this.outputElement.innerHTML = "Player 1, you rolled a " + rolled; //reset saying
    } else {
      this.outputElement.innerHTML = "Player 2, you rolled a " + rolled; //reset saying
      playerRoll = 0; //reset back to zero
    }
    playerRoll++; //adding 1

    newTurn.style.display = "flex"; //nextTurn button is now visible
    dieBlocker.style.display = "flex"; //nextTurn button is now visible

    //creating a time out... wait 0.4 seconds to change the image
    setTimeout(function () {
      document.getElementById("diceFrame").style.backgroundImage =
        "url('../images/dice-six-faces-" + rolled + ".svg')";
      //updating the die
    }, 400);
    spin = spin + 360; //each time it rolls add 360

    TweenMax.to(diceFrame, { duration: 0.3, y: -70 }); // dice jump up
    TweenMax.to(diceFrame, { duration: 0.2, y: 0, delay: 0.31 }); // dice going down
    TweenLite.to(diceFrame, { duration: 0.5, rotate: spin }); // dice spinning //calling spin
    this.movePlayer(rolled, player); //calling move player function
    dieBlocker.style.display = "flex"; //cannot reclick the dice
  }

  movePlayer(playerMove, player) {
    let moving = 0; //no one has moved
    let currentPlayer = "p" + player; //is it player 1 or 2
    //player 1 possible locations
    let player1Array = [
      { y: 0, x: 0 },
      { y: 0, x: 50 },
      { y: 0, x: 100 },
      { y: 0, x: 150 },
      { y: 0, x: 200 },
      { y: 0, x: 250 },
      { y: 0, x: 300 },
      { y: 0, x: 350 },
      { y: 0, x: 400 },
      { y: 0, x: 450 },
      { y: -50, x: 450 },
      { y: -50, x: 400 },
      { y: -50, x: 350 },
      { y: -50, x: 300 },
      { y: -50, x: 250 },
      { y: -50, x: 200 },
      { y: -50, x: 150 },
      { y: -50, x: 100 },
      { y: -50, x: 50 },
      { y: -50, x: 0 },
      { y: -100, x: 0 },
      { y: -100, x: 50 },
      { y: -100, x: 100 },
      { y: -100, x: 150 },
      { y: -100, x: 200 },
      { y: -100, x: 250 },
      { y: -100, x: 300 },
      { y: -100, x: 350 },
      { y: -100, x: 400 },
      { y: -100, x: 450 },
      { y: -150, x: 450 },
      { y: -150, x: 400 },
      { y: -150, x: 350 },
      { y: -150, x: 300 },
      { y: -150, x: 250 },
      { y: -150, x: 200 },
      { y: -150, x: 150 },
      { y: -150, x: 100 },
      { y: -150, x: 50 },
      { y: -150, x: 0 },
      { y: -200, x: 0 },
      { y: -200, x: 50 },
      { y: -200, x: 100 },
      { y: -200, x: 150 },
      { y: -200, x: 200 },
      { y: -200, x: 250 },
      { y: -200, x: 300 },
      { y: -200, x: 350 },
      { y: -200, x: 400 },
      { y: -200, x: 450 },
      { y: -250, x: 450 },
      { y: -250, x: 400 },
      { y: -250, x: 350 },
      { y: -250, x: 300 },
      { y: -250, x: 250 },
      { y: -250, x: 200 },
      { y: -250, x: 150 },
      { y: -250, x: 100 },
      { y: -250, x: 50 },
      { y: -250, x: 0 },
      { y: -300, x: 0 },
      { y: -300, x: 50 },
      { y: -300, x: 100 },
      { y: -300, x: 150 },
      { y: -300, x: 200 },
      { y: -300, x: 250 },
      { y: -300, x: 300 },
      { y: -300, x: 350 },
      { y: -300, x: 400 },
      { y: -300, x: 450 },
      { y: -350, x: 450 },
      { y: -350, x: 400 },
      { y: -350, x: 350 },
      { y: -350, x: 300 },
      { y: -350, x: 250 },
      { y: -350, x: 200 },
      { y: -350, x: 150 },
      { y: -350, x: 100 },
      { y: -350, x: 50 },
      { y: -350, x: 0 },
      { y: -400, x: 0 },
      { y: -400, x: 50 },
      { y: -400, x: 100 },
      { y: -400, x: 150 },
      { y: -400, x: 200 },
      { y: -400, x: 250 },
      { y: -400, x: 300 },
      { y: -400, x: 350 },
      { y: -400, x: 400 },
      { y: -400, x: 450 },
      { y: -450, x: 450 },
      { y: -450, x: 400 },
      { y: -450, x: 350 },
      { y: -450, x: 300 },
      { y: -450, x: 250 },
      { y: -450, x: 200 },
      { y: -450, x: 150 },
      { y: -450, x: 100 },
      { y: -450, x: 50 },
      { y: -450, x: 0 },
    ];
    //player 2 possible locations
    let player2Array = [
      { y: 0, x: 0 },
      { y: 0, x: 50 },
      { y: 0, x: 100 },
      { y: 0, x: 150 },
      { y: 0, x: 200 },
      { y: 0, x: 250 },
      { y: 0, x: 300 },
      { y: 0, x: 350 },
      { y: 0, x: 400 },
      { y: 0, x: 450 },
      { y: -50, x: 450 },
      { y: -50, x: 400 },
      { y: -50, x: 350 },
      { y: -50, x: 300 },
      { y: -50, x: 250 },
      { y: -50, x: 200 },
      { y: -50, x: 150 },
      { y: -50, x: 100 },
      { y: -50, x: 50 },
      { y: -50, x: 0 },
      { y: -100, x: 0 },
      { y: -100, x: 50 },
      { y: -100, x: 100 },
      { y: -100, x: 150 },
      { y: -100, x: 200 },
      { y: -100, x: 250 },
      { y: -100, x: 300 },
      { y: -100, x: 350 },
      { y: -100, x: 400 },
      { y: -100, x: 450 },
      { y: -150, x: 450 },
      { y: -150, x: 400 },
      { y: -150, x: 350 },
      { y: -150, x: 300 },
      { y: -150, x: 250 },
      { y: -150, x: 200 },
      { y: -150, x: 150 },
      { y: -150, x: 100 },
      { y: -150, x: 50 },
      { y: -150, x: 0 },
      { y: -200, x: 0 },
      { y: -200, x: 50 },
      { y: -200, x: 100 },
      { y: -200, x: 150 },
      { y: -200, x: 200 },
      { y: -200, x: 250 },
      { y: -200, x: 300 },
      { y: -200, x: 350 },
      { y: -200, x: 400 },
      { y: -200, x: 450 },
      { y: -250, x: 450 },
      { y: -250, x: 400 },
      { y: -250, x: 350 },
      { y: -250, x: 300 },
      { y: -250, x: 250 },
      { y: -250, x: 200 },
      { y: -250, x: 150 },
      { y: -250, x: 100 },
      { y: -250, x: 50 },
      { y: -250, x: 0 },
      { y: -300, x: 0 },
      { y: -300, x: 50 },
      { y: -300, x: 100 },
      { y: -300, x: 150 },
      { y: -300, x: 200 },
      { y: -300, x: 250 },
      { y: -300, x: 300 },
      { y: -300, x: 350 },
      { y: -300, x: 400 },
      { y: -300, x: 450 },
      { y: -350, x: 450 },
      { y: -350, x: 400 },
      { y: -350, x: 350 },
      { y: -350, x: 300 },
      { y: -350, x: 250 },
      { y: -350, x: 200 },
      { y: -350, x: 150 },
      { y: -350, x: 100 },
      { y: -350, x: 50 },
      { y: -350, x: 0 },
      { y: -400, x: 0 },
      { y: -400, x: 50 },
      { y: -400, x: 100 },
      { y: -400, x: 150 },
      { y: -400, x: 200 },
      { y: -400, x: 250 },
      { y: -400, x: 300 },
      { y: -400, x: 350 },
      { y: -400, x: 400 },
      { y: -400, x: 450 },
      { y: -450, x: 450 },
      { y: -450, x: 400 },
      { y: -450, x: 350 },
      { y: -450, x: 300 },
      { y: -450, x: 250 },
      { y: -450, x: 200 },
      { y: -450, x: 150 },
      { y: -450, x: 100 },
      { y: -450, x: 50 },
      { y: -450, x: 0 },
    ];

    //it is player 1
    if (currentPlayer === "p1") {
      moving = playerMove; //what did the player rolled
      p1spotMove = p1spotMove + moving; //add roll to past position

      if (p1spotMove <= 101) {
        //moving to spot
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: player1Array[p1spotMove].y,
          x: player1Array[p1spotMove].x,
        });
      }

      // THIS ARE SPECIAL LOCATIONS
      if (p1spotMove === 19) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -150,
            x: 0,
          });
        }, 2000);
        p1spotMove = 39;
      } else if (p1spotMove === 28) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: 0,
            x: 400,
          });
        }, 2000);
      } else if (p1spotMove === 31) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 300,
          });
        }, 2000);
        p1spotMove = 53;
      } else if (p1spotMove === 43) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 200,
          });
        }, 2000);
        p1spotMove = 55;
      } else if (p1spotMove === 45) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -50,
            x: 200,
          });
        }, 2000);
        p1spotMove = 15;
      } else if (p1spotMove === 60) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -350,
            x: 150,
          });
        }, 2000);
        p1spotMove = 76;
      } else if (p1spotMove === 74) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -450,
            x: 250,
          });
        }, 2000);
        p1spotMove = 94;
      } else if (p1spotMove === 86) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -200,
            x: 450,
          });
        }, 2000);
        p1spotMove = 49;
      } else if (p1spotMove === 91) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -350,
            x: 400,
          });
        }, 2000);
        p1spotMove = 71;
      } else if (p1spotMove === 97) {
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p1spotMove = 58;
      } else if (p1spotMove === 107) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p1spotMove = 91;
      } else if (p1spotMove === 106) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p1spotMove = 92;
      } else if (p1spotMove === 105) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p1spotMove = 93;
      } else if (p1spotMove === 104) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 250,
        });
        p1spotMove = 94;
      } else if (p1spotMove === 103) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 200,
        });
        p1spotMove = 95;
      } else if (p1spotMove === 102) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 150,
        });
        p1spotMove = 96;
      } else if (p1spotMove === 101) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 100,
        });
        setTimeout(function () {
          TweenMax.to(p1, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p1spotMove = 58;
      } else if (p1spotMove === 100) {
        TweenMax.to(p1, {
          duration: 0.3 * moving,
          y: -450,
          x: 50,
        });
        p1spotMove = 98;
      } else if (p1spotMove === 99) {
        TweenMax.to(result, {
          duration: 1,
          y: 0,
          x: 1600,
          delay: 1,
        });
        winnerMessage.innerHTML = "Congrats Player 1! You Win!";
      }

      player1Spot = p1spotMove + 1; //setting playerSpot
      player1SpotMessage.innerHTML = "Player 1 spot: " + player1Spot; //display player spot
    }
    //it is player 2
    if (currentPlayer === "p2") {
      moving = playerMove; //what did player roll
      p2spotMove = p2spotMove + moving; //add roll to past position
      ///moving player position
      if (p2spotMove <= 101) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: player2Array[p2spotMove].y,
          x: player2Array[p2spotMove].x,
        });
      }

      //THIS ARE SPECIAL SPOTS
      if (p2spotMove === 19) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -150,
            x: 0,
          });
        }, 2000);
        p2spotMove = 39;
      } else if (p2spotMove === 28) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: 0,
            x: 400,
          });
        }, 2000);
      } else if (p2spotMove === 31) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 300,
          });
        }, 2000);
        p2spotMove = 53;
      } else if (p2spotMove === 43) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 200,
          });
        }, 2000);
        p2spotMove = 55;
      } else if (p2spotMove === 45) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -50,
            x: 200,
          });
        }, 2000);
        p2spotMove = 15;
      } else if (p2spotMove === 60) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -350,
            x: 150,
          });
        }, 2000);
        p2spotMove = 76;
      } else if (p2spotMove === 74) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -450,
            x: 250,
          });
        }, 2000);
        p2spotMove = 94;
      } else if (p2spotMove === 86) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -200,
            x: 450,
          });
        }, 2000);
        p2spotMove = 49;
      } else if (p2spotMove === 91) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -350,
            x: 400,
          });
        }, 2000);
        p2spotMove = 71;
      } else if (p2spotMove === 97) {
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p2spotMove = 58;
      } else if (p2spotMove === 107) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p2spotMove = 91;
      } else if (p2spotMove === 106) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p2spotMove = 91;
      } else if (p2spotMove === 105) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 300,
        });
        p2spotMove = 93;
      } else if (p2spotMove === 104) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 250,
        });
        p2spotMove = 94;
      } else if (p2spotMove === 103) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 200,
        });
        p2spotMove = 95;
      } else if (p2spotMove === 102) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 150,
        });
        p2spotMove = 96;
      } else if (p2spotMove === 101) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 100,
        });
        setTimeout(function () {
          TweenMax.to(p2, {
            duration: 0.3,
            y: -250,
            x: 50,
          });
        }, 2000);
        p2spotMove = 58;
      } else if (p2spotMove === 100) {
        TweenMax.to(p2, {
          duration: 0.3 * moving,
          y: -450,
          x: 50,
        });
        p2spotMove = 98;
      } else if (p2spotMove === 99) {
        TweenMax.to(result, {
          duration: 1,
          y: 0,
          x: 1600,
          delay: 1,
        });
        winnerMessage.innerHTML = "Congrats Player 2! You Win!";
      }

      player2Spot = p2spotMove + 1;
      player2SpotMessage.innerHTML = "Player 2 spot: " + player2Spot;
    }
  }
  //MOVING TO NEXT PLAYER
  next() {
    newTurn.style.display = "none"; //nextTurn button is invisible. Next player needs to roll
    dieBlocker.style.display = "none"; //blocker is gone. dice is now clickable

    //only 2 players in the game. Go back to one once player reaches 2
    if (player === 1) {
      this.outputElement.innerHTML = "Player 2, it's your turn"; //reset saying
    } else {
      this.outputElement.innerHTML = "Player 1, it's your turn"; //reset saying
      player = 0;
    }
    newTurn.style.display = "none"; //don't show next turn button
    player++;
  }
  //RESETTING THE GAME
  reset() {
    //moving winnerscreen away
    TweenMax.to(result, {
      duration: 1,
      y: 0,
      x: 0,
      delay: 1,
    });
    p1spotMove = 0; //setting player 1 spot back to 0
    p2spotMove = 0; //setting player 2 spot back to 0
    //MOVING THE PLAYERS BACK TO SPOT 1
    TweenMax.to(p1, {
      duration: 0.5,
      y: 0,
      x: 0,
    });
    TweenMax.to(p2, {
      duration: 0.5,
      y: 0,
      x: 0,
    });
    this.outputElement.innerHTML = "Player 1, Please roll the dice"; //Player 1 starts
    player1SpotMessage.innerHTML = "Player 1 spot: 1"; //setting spot message to say player is in spot 1
    player2SpotMessage.innerHTML = "Player 2 spot: 1"; //setting spot message to say player is in spot 1
    newTurn.style.display = "none"; //nextTurn button is invisible. Next player needs to roll
    dieBlocker.style.display = "none"; //nextTurn button is now visible
    player = 1; //player 1 goes first
  }
}

let myRoll = new diceRoll(document.getElementById("Response")); //creating a diceRoll

// Creating a Title Class -- simple and easy :)
class Title {
  title;
  constructor(title) {
    document.getElementById("title").innerHTML = title; //this would set the game title
  }
}
let gameTitle = new Title("Snakes & Ladders"); //Creating game title
//when start button is clicked move start screen off the screen
function startGame() {
  TweenMax.to(start, {
    duration: 0.5,
    y: 0,
    x: -1600,
    delay: 0.1,
  });
}

//changing background color --- rbg
class startPageColor {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
    start.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
}
const red = new startPageColor(157, 192, 206); //creating background color for start screen

//changin background color --- but only one value
class winnerPageColor {
  constructor(value) {
    this.value = value;
    result.style.backgroundColor = "#" + value;
  }
}
const winnerPage = new winnerPageColor("ebe6a1"); //creating background color for winner screen
