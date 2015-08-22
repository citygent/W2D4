$(document).ready(function(){
  console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
  setupBoard();
})

// build game for 16 tiles first, if time refactor for any size.
var gameTiles = [];
var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function eventListeners(){
  $('.tile').on('click', function(event) {
    var id = ($(this));
    console.log(id);
    console.log(this.id);
    var tileimg = ($(this).data("tile"))//From docs: var mydata = $( "#mydiv" ).data();
    console.log(tileimg)
    flipTile(id, tileimg);
  });
}

function flipTile(id, tileimg){ // tells tile to display
  $(id).html(tileimg);
}

function setupBoard() {
  getGameTiles(16); 
  console.log("Selected Tiles:"+gameTiles);
  console.log("Amount of Selected Tiles:"+gameTiles.length);
  console.log("Unselected Tiles:"+possibleTiles);
  gameTiles = randomiseBoard(gameTiles);
  console.log("Shuffled Game Tiles:"+gameTiles);
  console.log("Amount of Shuffled Tiles:"+gameTiles.length);
  // this forloop goes through array of selested and randomised tiles and builds divs for them on page. 
  for (i=0; i < gameTiles.length; i++) {  // have a look at jquery.each / $.each(array, function(){} when refactoring. 
 // $('<div class="tile" data-tile="'+ gameTiles[i] +'" </div>').appendTo('#board'); // this looks funny in dev tools, investigate why. 
    $("<div class='tile' id='"+i+"' data-tile='"+ gameTiles[i] +"'></div>").appendTo("#board"); // this looks funny in dev tools, investigate why. 
  }
  eventListeners();
}


//selects random tile from possilbes list, pushes two of each to array. 
function getGameTiles(tiles) {
  for(i=0; i < (tiles/2); i++) { //needs /2 because places two of each innit.
    var randomTile = possibleTiles[Math.floor(Math.random()*possibleTiles.length)];
    // console.log(randomTile);
    gameTiles.push(randomTile);
    gameTiles.push(randomTile); 
    possibleTiles.splice(possibleTiles.indexOf(randomTile),1);
  }
}

function randomiseBoard(arrayOfTiles) {
  var shuffled = [];
  while (arrayOfTiles.length > 0) { // Whilst tiles left on unshuffled board...
		tile = arrayOfTiles[Math.floor(Math.random() * arrayOfTiles.length)]; // Pick a random tile
		shuffled.push(tile); // push it to resulting board
		arrayOfTiles.splice(arrayOfTiles.indexOf(tile), 1); // make sure can't be called again.
	  }
	  return shuffled;
}

