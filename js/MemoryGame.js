$(document).ready(function(){
  console.log("PRIORITY ONE\nENSURE RETURN OF ORGANISM FOR ANALYSIS.\nALL OTHER CONSIDERATIONS SECONDARY.\nCREW EXPENDABLE.");
  $logo = $('#logoimg');
  setupBoard();
  $('#logoimg').css({opacity:0})
  setTimeout(function(){
    flicker($logo);
    flicker($('main'));
    }, 1000);

})

// build game for 16 tiles first, if time refactor for any size.
var gameTiles = [];
// var possibleTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var flip1 = null;
var flip2 = null;
var currentlyFlipped = 0;
var errors = 0;
var correct = 0;


// animating this is going to be a pain in the arse, see: http://jsfiddle.net/YaUPs/


function eventListeners(){
  $('.tile').on('click', function(event) {
    var id = ($(this));
    // console.log(id);
    // console.log($(this).attr("id")); // use correct syntax!! Last nigth you were trying ($(this).id).
    // console.log(this.id); // non jQueeery option. 
    var tileimg = ($(this).data("tile"));//From docs: var mydata = $( "#mydiv" ).data();
    // console.log(tileimg);
    if ((currentlyFlipped < 2) && ($(id).html() == "")) { //checks target tile isn't already flipped. 
      flipTile(id, tileimg);
    }
  });
}

function flipTile(id, tileimg){ // tells tile to display
    if (currentlyFlipped == 0) {
      flip1 = id;
      $(id).html(tileimg); // puts data attribute(letter) into html of div.
      currentlyFlipped++;
      // debugger;
    } else if (currentlyFlipped == 1) {
      flip2 = id;
      $(id).html(tileimg);
      currentlyFlipped++;
      // console.log(flip1);
      // console.log(flip2);
      // console.log($(flip1).html())
      // console.log($(flip2).html())
      // debugger;
      checkMatch(flip1, flip2);
  } /// This is now the messiest function I've ever written jesus christ what is wrong with me. 
}

function checkMatch(flip1, flip2) {
  if ($(flip1).html() == $(flip2).html()){
    console.log("WeheyyyyY!");
    correct++;
    currentlyFlipped = 0;
    checkWinner();
  } else {
    errors++;
    errorsDisplay();
    setTimeout(function(){
      unflipTile(flip2);
      unflipTile(flip1);
    }, 2000);    
  }
}

function unflipTile (id) { // tells tile to hide
    $(id).html("");
    currentlyFlipped--
}

function setupBoard() {
  getGameTiles(16); 
  // console.log("Selected Tiles:"+gameTiles);
  // console.log("Amount of Selected Tiles:"+gameTiles.length);
  // console.log("Unselected Tiles:"+possibleTiles);
  gameTiles = randomiseBoard(gameTiles);
  // console.log("Shuffled Game Tiles:"+gameTiles);
  // console.log("Amount of Shuffled Tiles:"+gameTiles.length);
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

function checkWinner() {
  if (correct === 8) {
    console.log('Winner winner, chicken dinner.')
  }
}


function errorsDisplay() {
  $('#errors').addClass('show');
  $('#errors').html("<p class='typingimmediate'>ERRORS: "+errors+"</p>");
}

function flicker(element){
  element.animate({opacity:1}, {duration:200})
  .animate({opacity:0}, {duration:10})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:10})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:50})
  .animate({opacity:1}, {duration:35})
  .animate({opacity:0}, {duration:75})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:10})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:50})
  .animate({opacity:1}, {duration:75})
  .animate({opacity:0}, {duration:100})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:100})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:50})
  .animate({opacity:1}, {duration:200})
  .animate({opacity:0}, {duration:75})
  .animate({opacity:1}, {duration:10})
  .animate({opacity:0}, {duration:50})
  .animate({opacity:1}, {duration:200})
  .animate({opacity:0}, {duration:75})
  .animate({opacity:1}, {duration:100});
};

// <img src='./images/airlock.png'>

var possibleTiles = ['<img src="images/airlock.png">',
'<img src="images/area-sheilded-from-radiation.png">',
'<img src="images/artificial-gravity-area-non-pressurized-suit-required.png">',
'<img src="images/astronic-systems.png">',
'<img src="images/autodoc.png">',
'<img src="images/bridge.png">',
'<img src="images/bulkhead-door.png">',
'<img src="images/coffee.png">',
'<img src="images/computer-terminal.png">',
'<img src="images/cryogenic-vault.png">',
'<img src="images/direction-down.png">',
'<img src="images/direction-left.png">',
'<img src="images/direction-right.png">',
'<img src="images/direction-up.png">',
'<img src="images/exhaust.png">',
'<img src="images/galley.png">',
'<img src="images/hazard-warning.png">',
'<img src="images/high-radiation.png">',
'<img src="images/intercom.png">',
'<img src="images/ladderway.png">',
'<img src="images/laser.png">',
'<img src="images/life-support-systems.png">',
'<img src="images/maintenance.png">',
'<img src="images/medical-life-support-systems.png">',
'<img src="images/medical.png">',
'<img src="images/no-gravity-area-non-pressurized-suit-required.png">',
'<img src="images/non-pressurized-area-beyond.png">',
'<img src="images/organic-storage-foodstuffs.png">',
'<img src="images/photonic-systems.png">',
'<img src="images/pressure-suit-locker.png">',
'<img src="images/pressurized-area-aritficial-gravity-absent.png">',
'<img src="images/pressurized-area-artificial-gravity.png">',
'<img src="images/pressurized-area.png">',
'<img src="images/radiation-hazard.png">',
'<img src="images/refridgerated-storage-medical.png">',
'<img src="images/refridgerated-storage-organic-foodstuffs.png">',
'<img src="images/refridgeration.png">',
'<img src="images/storage.png">']
