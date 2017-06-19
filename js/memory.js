/* Program starts with all cards are hidden allows user to click on two cards. 
** If there there is a match, the cards remain revealed for the rest of the game.
** Otherwise, the cards are hidden again.
** Game ends when all cards are revealed.
*/


// Load JS after DOM loaded
$(document).ready(function () {
// Hide all card values at start of game
$('p').hide();
var pairs = 0;
var numShowing = 0;
var showArray = [];
var match, gameOver;

         // after clicking on, reveal card value  
        $(".card").click(function(){
            if (numShowing <= 1){
                $(this).find('p').show().text();
                showArray.push($(this))
                numShowing +=1;x
            }
            if (numShowing === 2){
                // check for match
                if (showArray[0].find('p').text() == showArray[1].find('p').text()){
                    pairs += 1;
                }      
                else {
                    showArray.forEach(function(element) {
                        element.find('p').hide()
                    });
                }
                // reinitialize comparision array
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