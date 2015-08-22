console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
// build game for 16 tiles first, if time refactor for any size.
var gameBoard = [];
var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//selects random tile from possilbe list, pushes two of each to gameboard. 
function buildBoard(tiles) {
	for(i=0; i < (tiles/2); i++) { //needs /2 because places two of each innit.
			var randomTile = possibleTiles[Math.floor(Math.random()*possibleTiles.length)];
			console.log(randomTile);
			gameBoard.push(randomTile);
			gameBoard.push(randomTile); 
			possibleTiles.splice(possibleTiles.indexOf(randomTile),1);
		}
	}

buildBoard(16);
// console.log("gameBoard:"+gameBoard);
// console.log("UnselectedTiles:"+possibleTiles);
// console.log(gameBoard.length);

