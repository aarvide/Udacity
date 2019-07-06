# Alfredo Arvide 
## Udacity Front End Web Developer
## Project 3 - Classic Arcade Game

## Table of Contents

- [Introduction](#introduction)
- [How To Run](#how to run)
- [File Structure](#file structure)
- [Credits](#credits)

## Introduction 

My Third Project for the Front End Web Developer Course at Udacity is based on the classic Arcade Gage: Frogger. It consists of 1 character (the player) and multiple enemies.  The premise is that the character must get across the field by going up, down, left and right, and avoding all the enemies along the way.</br>

Technically, this game uses a game engine, and is a great example of how to develop in object oriented programming. This game includes:
* A couple classes that control all the game activity and objects - mainly the Enemy Class and the Player class
* A Level - We keep track of what level the player is at. The level increases when the player passes wins in increments of 10.
* A Moves Counter - This is just a fun addition to show the user how many moves its taken in that particular turn
* A Losses Counter - This also allows the user to keep track of how many times they have lost.  If you lose more than 10 times, the game resets and you have to start over.
* We also have a reset button, that allows a player to go back to the beginning if they wish.
* In the background we also implemented a modal window that is displayed when the player wins or loses.

#### How To Run

* Simply download all the code, and run the `index.html` file.
* As soon as the page loads, you can use your arow keys on your keyboard to control the player.  Its that simpley.
* Keep an eye out for the Losses, if you loose more than 10 times, you are out!
* If you want to reset the game, click on the Restart icon.

#### File Structure

* Index.html contains the main HTML code to run the game
* app.js contains the main javascript code that handles the objects
* engine.js was provided to us and runs the game engine
* resource.js is a helper file that helps handle image manipulation
* style.css contains the main css code that styles the game

#### Credits

* I used the W3Schools baseline modal example from https://www.w3schools.com/howto/howto_css_modals.asp

---
