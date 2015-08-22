$(document).ready(function(){
  console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
  setup();
})

// build game for 16 tiles first, if time refactor for any size.
var gameTiles = [];
var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function setup() {
  getGameTiles(16);
  gameTiles = randomiseBoard(gameTiles);
  for (i=0; i < gameTiles.length; i++) {
    $('<div class="tile" data-tile="'+ gameTiles[i] +'" </div>').appendTo('#board'); // this looks funny in dev tools, investigate why. 
  }
}


//selects random tile from possilbe list, pushes two of each to array. 
function getGameTiles(tiles) {
  for(i=0; i < (tiles/2); i++) { //needs /2 because places two of each innit.
    var randomTile = possibleTiles[Math.floor(Math.random()*possibleTiles.length)];
    // console.log(randomTile);
    gameTiles.push(randomTile);
    gameTiles.push(randomTile); 
    possibleTiles.splice(possibleTiles.indexOf(randomTile),1);
  }
}

console.log("Selected Tiles:"+gameTiles);
console.log("Unselected Tiles:"+possibleTiles);
console.log("Amount of Tiles:"+gameTiles.length);

function randomiseBoard(gameBoard) {
  var shuffled = [];
  while (gameBoard.length > 0) { // Whilst tiles left on unshuffled board...
		tile = gameBoard[Math.floor(Math.random() * gameBoard.length)]; // Pick a random tile
		shuffled.push(tile); // push it to resulting board
		gameBoard.splice(gameBoard.indexOf(tile), 1); // make sure can't be called again.
	  }
	  return shuffled;
}

console.log("Shuffled Game Tiles:"+gameTiles);
console.log("Amount of Shuffled Tiles:"+gameTiles.length);