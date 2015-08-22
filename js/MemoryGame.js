console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
// build game for 16 tiles first, if time refactor for any size.
var gameBoard = [];
var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//selects random tile from possilbe list, pushes two of each to gameboard. 
function buildBoard(tiles) {
  for(i=0; i < (tiles/2); i++) { //needs /2 because places two of each innit.
    var randomTile = possibleTiles[Math.floor(Math.random()*possibleTiles.length)];
    // console.log(randomTile);
    gameBoard.push(randomTile);
    gameBoard.push(randomTile); 
    possibleTiles.splice(possibleTiles.indexOf(randomTile),1);
  }
}

buildBoard(16);
console.log("Game Board:"+gameBoard);
console.log("Unselected Tiles:"+possibleTiles);
console.log("Amount of Tiles:"+gameBoard.length);

// function randomiseBoard(aGameBoard) {
// 	var shuffled = [];
// 	while (aGameBoard.length > 0); { // Whilst tiles left on unshuffled board...
// 		randomTile = Math.floor(Math.random()*aGameBoard.length--); // Pick a random tile
// 		shuffled.push(aGameBoard.splice(randomTile,1)[0]);  //push it to shuffled board, removing it from original.
// 	}
// 	return shuffled; // return shuffled board on function call.
// } Returning NaN. Need to remember to call values not indexes. Trying to be too clever on line 26. 

function randomiseBoard(gameBoard) {
  var shuffled = [];
  while (gameBoard.length > 0) { // Whilst tiles left on unshuffled board...
		tile = gameBoard[Math.floor(Math.random() * gameBoard.length)]; // Pick a random tile
		shuffled.push(tile); // push it to resulting board
		gameBoard.splice(gameBoard.indexOf(tile), 1); // make sure can't be called again.
	  }
	  return shuffled;
}

gameBoard = randomiseBoard(gameBoard);
console.log("Shuffled Game Board:"+gameBoard);
console.log("Amount of Shuffled Tiles:"+gameBoard.length);