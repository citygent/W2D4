![Weyland-Yutani Logo](http://citygent.github.io/images/weylanlogo.png)
## Weylan-Yutani Training Module: Signage Aboard


**A Memory Pair Game** with visuals based on signage and computer terminals abord the fictional star ship USCSS Nostromo, the setting for Ridley Scott's 1979 Sci-Fi masterpiece, Alien.

###Playing the Game
The game board gets populted with 8 random pairs of tile signage (from a library of 35) turned upside down.

By clicking on a tile a user flips it, clicking on a second tile will trigger a countdown of 4 seconds, if the tiles match they stay up, if they don't, your error count gets raised by 1 per pair.

The objective of the game is to complete the board with as little error count as possible. An error count above 20 may result in termination of ICC license as a commercial flight officer!


###Technologies
The game has been built with HTML5, CSS3 and JavaScript utilizing jQuery 2.1.4 and SoundManager2 libraries.

Currently only tested in Chrome, some minor bugs reported in Safari and Firefox 31 have attempted to be addressed with vendor prefixes.

###Known Issues and Function Flow
From a user perspective in Chrome, none are reported other than display of the 'success' popup if a user iterates through a 'fail' too quickly.

The javascript is written in a linear fashion and would benefit from some OOP principles. Currently the function flow is:

####setupBoard()
Calls a random set of tiles from **getGameTiles(value)**, it then randomises these tiles on the board by location using **randomiseBoard(array)** and pushes them through the DOM to the div #board using appendTo. 

####eventListeners()
Adds click events to all of the divs created by **setupBoard()**, also sends values of these to the function called by the event:

####flipTile(tile)
Checks to see if one or two tiles are already flipped. If one or none, will let you flip the current tile **($this)** and displays tile value in the aside.

####checkMatch(flip1, flip2)
Checks to see if user choices match each other, if they don't the tiles flip back (using **unFlipTIle()**) after telling the user they're a failure and raising their Error Count. If the tiles match the user is rewarded with a green 'Success' display and the tiles remain upright, the final function below is called:

####checkWinner()
Checks to see if the success count is 8. If so user is rewarded with TESTING COMPLETE display. 

###Further Developments
I would like to see this rewritten in OOP before further features are added:

Restart button (without refreshing page).

Responsive (so you can play on iPad or iPhone).

Ability to change difficulty (board size, random shuffles of tile positions during play).

Scoring system based on time and error count. 

Ability to save scores for comparison.


