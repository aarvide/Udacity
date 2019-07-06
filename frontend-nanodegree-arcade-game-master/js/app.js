//Global variables that keep track of the scores

// Moves
let currentMoves = 0;
const movesScore = document.querySelector(".moves");

// Wins
let currentWins = 0;
const winsScore = document.querySelector(".wins");

// Losses
let currentLosses = 0;
const lossesScore = document.querySelector(".losses");

//PopUp for when the game is won
let modalText = document.querySelector(".modal-text");

//This is the restart button to reset the game at any time
const restart = document.querySelector(".restart");

//This is the popup that will come up when the game is won
const modal = document.getElementById("winModal");

// Characters!
var characters = [	
	'images/char-pink-girl.png',
	'images/char-horn-girl.png',
	'images/char-cat-girl.png',
	'images/char-princess-girl.png',
	'images/Star.png',
	'images/Rock.png'
];
var currentCharacter = 0;
const level = document.querySelector(".level");
var charBoolean = 1;

// Enemies our player must avoid
var Enemy = function() {

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	
	// Here is where we set the random starting point
	// for the enemies so they then start to move horizontally
	this.xPositions = [0, 101, 202, 303, 404]; // they can start on any column tile
	this.yPositions = [41.5, 124.5, 207.5]; // the row's are 83, so half = 41.5
	
	//Generate the starting X and Y Position at random within the available starting
	// positions within the Positions Array. Use Math.random and Math.floor
	this.x = this.xPositions[Math.floor(Math.random() * this.xPositions.length)];
	this.y = this.yPositions[Math.floor(Math.random() * this.yPositions.length)];
	
	// Now you have to give the enemies a velocity, from 5 to 100
	this.velocity = Math.floor((Math.random() * 100) + 5) * (currentCharacter + 1); // this gives us a percentage velocity
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x + (this.velocity * dt);
	
	// Now if the enemy has gone off the grid, then refresh its position to
	// a random starting position again. Also reset its velocity with a new random one
	if (this.x >= 505 && this.velocity != 0)
	{	
		this.x = this.xPositions[Math.floor(Math.random() * this.xPositions.length)];
		this.y = this.yPositions[Math.floor(Math.random() * this.yPositions.length)];
		this.velocity = Math.floor((Math.random() * 100) + 5) * (currentCharacter + 1 ); //Velocity gets faster as you win and change more characters
	}
	
	//Check first if we've LOST the game, if so, end the game and reset it.
	if (currentLosses == 10) {	endGame(); }
	
	//This is the 'Easter Egg', once you hit Character 5, you become a rock a and you kill the enemies.
	else if (currentCharacter == 5 && currentWins >= 50)
	{
		//Check for collisioms
		if ((this.x > player.x - 83 && this.x < player.x + 83) 
			&& (this.y > player.y - 83 && this.y < player.y + 83)) 
		{
			player.x = 202; player.y = 404;
			
			//Check if the bugs have been smashed!
			if (allEnemies.length > 1) { allEnemies.pop(); }
			else { allEnemies.pop(); wonGame(); }
		}
	}
	
	//This is the alternative, if you are not a rock, then you check to see if you are hitting the enemies
	else
	{
		// This is where you check if one of the enemies has hit the character
		// and then act accordingly
		if ((this.x > player.x - 83 && this.x < player.x + 83) 
			&& (this.y > player.y - 83 && this.y < player.y + 83)) 
		{
			// Return player to initial position
			player.x = 202; player.y = 404;

			// All the enemies in the board get reset and to a new position
			allEnemies.forEach(function(enemy) 
			{ 
				enemy.x = enemy.xPositions[Math.floor(Math.random() * enemy.xPositions.length)]; 
				enemy.y = enemy.yPositions[Math.floor(Math.random() * enemy.yPositions.length)];
			});

			// First we need to increase the Losses Counter
			currentLosses++;
			currentMoves = 0;	//Since you lost, you reset the MOVES to 0

			//Then display the number of moves on the score board
			lossesScore.innerHTML = `${currentLosses} Losses`;
			movesScore.innerHTML = `${currentMoves} Moves`;		//Since you lost, you reset the MOVES
		}
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {

    // The image/sprite for the main player, this uses
	// the helper provided to easily load the images
	this.sprite = characters[currentCharacter];
	
	// Now we set the coordinates for where the player will
	// start their game every time they win or lose
	this.x = 202;
	this.y = 404;
};

Player.prototype.handleInput = function(input){
	
	// Change position according to input keyPress if statments only
	// allows movement inside canvas bounderies
	
	if(input === 'up')
	{ 
		this.y = this.y - 83;
		
		//You made a MOVE, update the Moves counter
		currentMoves++;
		movesScore.innerHTML = `${currentMoves} Moves`;	
		
		if (this.y < 0) 
		{ 
			this.y = 404; this.x = 202; 
		
			// First we need to increase the Wins Counter
			currentWins++;
			currentMoves = 0;	//Since you won, you reset the MOVES
	
			//Then display the number of Wins on the score board
			winsScore.innerHTML = `${currentWins} Wins`;
			movesScore.innerHTML = `${currentMoves} Moves`;		//Since you won, you reset the MOVES
		}
	}
		
	else if (input === 'down') {
		if (this.y < 404) 
		{ 
			this.y = this.y + 83; 
			
			//You made a MOVE, update the Moves counter
			currentMoves++;
			movesScore.innerHTML = `${currentMoves} Moves`;	
		}
	}
	
	else if (input === 'left') {
		if (this.x > 0) 
		{ 
			this.x = this.x - 101; 
			
			//You made a MOVE, update the Moves counter
			currentMoves++;
			movesScore.innerHTML = `${currentMoves} Moves`;	
		}
	}
	
	else if (input === 'right') {
		if (this.x < 404) 
		{ 
			this.x = this.x + 101; 
			
			//You made a MOVE, update the Moves counter
			currentMoves++;
			movesScore.innerHTML = `${currentMoves} Moves`;	
		}
	}
	
	else { /* Don't do anything for other key presses */ }
	
	//Now check depending on how many wins you have, which characeter you get!
	if ( currentWins == 10 && charBoolean == 1 ) 
		{ currentCharacter++; this.sprite = characters[currentCharacter]; charBoolean = 0; }
	
	else if (currentWins == 20 && charBoolean == 0 ) 
		{ currentCharacter++; this.sprite = characters[currentCharacter]; charBoolean = 1; }
	
	else if (currentWins == 30 && charBoolean == 1 ) 
		{ currentCharacter++; this.sprite = characters[currentCharacter]; charBoolean = 0; }
	
	else if (currentWins == 40 && charBoolean == 0 ) 
		{ currentCharacter++; this.sprite = characters[currentCharacter]; charBoolean = 1; }
	
	else if (currentWins == 50 && charBoolean == 1 ) 
		{ currentCharacter++; this.sprite = characters[currentCharacter]; charBoolean = 0; }
	
	level.innerHTML = `Level ${currentCharacter} :: `;
};

Player.prototype.update = function(dt) { /* Nothing to see here folks */ };

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];

// Place the player object in a variable called player
var player = new Player();

//When the Game Ends or is Won, you can reset to start over
function resetGame()
{
	//Start Over!
	currentMoves = 0;
	movesScore.innerHTML = `${currentMoves} Moves`;
	
	currentWins = 0;
	winsScore.innerHTML = `${currentWins} Wins`;
	
	currentLosses = 0;
	lossesScore.innerHTML = `${currentWins} Losses`;
	
	currentCharacter = 0;
	charBoolean = 1;
	level.innerHTML = `Level ${currentCharacter} :: `;
	
	allEnemies = [new Enemy(), new Enemy(), new Enemy()];
	player = new Player();
}

//This is the function that is called when the player reaches 50 wins and crushes the bugs wiht the rock.
//It resets the game
function wonGame()
{
	modalText.innerHTML = `Congratulations!` + `<br>` + `You WON the game with only ` + `${currentLosses} Losses. ` + ` Good Job!!`;

	// So Open the Modal
	modal.style.display = 'block';

	// Get the close button ready to be clicked to close the modal
	var span = document.getElementsByClassName("close")[0];

	// Then add the event listener, so that when it is clicked
	span.onclick = function() { modal.style.display = "none"; resetGame(); }

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {	if (event.target == modal) { modal.style.display = "none"; resetGame(); } }
}

//This is the function that is called when the player reaches 10 losses. It resets the game.
function endGame()
{
	modalText.innerHTML = `Good Try!` + `<br>` + `You LOST the game but won ` + `${currentWins} times. ` + ` Good Job!!`;

	// So Open the Modal
	modal.style.display = 'block';

	// Get the close button ready to be clicked to close the modal
	var span = document.getElementsByClassName("close")[0];

	// Then add the event listener, so that when it is clicked
	span.onclick = function() { modal.style.display = "none"; resetGame(); }

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {	if (event.target == modal) { modal.style.display = "none"; resetGame(); } }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// to restart the game when the player click on the restart icon
restart.addEventListener("click", resetGame);
