console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
// build game for 16 tiles first, if time refactor for any size.
var gameBoard = [];
var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//selects random tile from possilbe list, pushes two of each to gameboard. 
function buildBoard(rows, cols) {
	for(i=0; i < cols; i++) {
		for (j=0; j < rows; j++) {
			var randomTile = possibleTiles[Math.floor(Math.random()*possibleTiles.length)];
			gameBoard.push(randomTile);
			gameBoard.push(randomTile); 
			debugger; //bug: can select tiles more than once?
			possibleTiles.splice([randomTile], 1);
		}
	}
}

buildBoard(4,4);
console.log(gameBoard);


function shuffleBoard(board) {

}