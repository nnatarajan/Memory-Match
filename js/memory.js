/* Program simulates memory game.
** At the start, all card values are hidden. User selects two cards by clicking on them. 
** If a match is found, the matched cards' values remain revealed for the rest of the game.
** Otherwise, selected card values are rehidden. Game ends when all matches are made.
*/

// Load JS after DOM loaded
$(document).ready(function () {
    
// Initialize variables
var pairs = 0;
var numShowing = 0;
var showArray = [];
var match, gameOver;

// Hide all card values at start of game
$('p').hide();

         // after clicking on, reveal card value  
        $(".card").click(function(){
            if (numShowing <= 1){
                $(this).find('p').show().text();
                showArray.push($(this))
                numShowing +=1;x
            }
            // if two cards are selected, check for a match
            if (numShowing === 2){
                if (showArray[0].find('p').text() == showArray[1].find('p').text()){
                    pairs += 1;
                }  
                // if no match is found, rehide card values    
                else {
                    showArray.forEach(function(element) {
                        element.find('p').hide()
                    });
                }
                // reinitialize comparision array and number of pairs showing
                showArray = [];
                numShowing = 0;
            }
         // decide when game ends, when there are eight pairs       
            if (pairs === 8) {
            document.write("Congrats!");
            document.write("You won!");
            return
            } 
        }); 
});