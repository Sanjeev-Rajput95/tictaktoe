const prompt = require('prompt-sync')({ sigint: true });
console.log('Welcome to tictaktoi game'); 
let player = 0;
let system = 1;
let player_symbol = ' ';
let system_symbol = ' ';
let toss ;
// function board() {

//     console.log(" `$(board1)`    |`$(board2)`   |`$(board)`");
//     console.log(" .........................................");
//     console.log("    `$(board4)` |`$(board5)`   |`$(board6)`");
//     console.log(" .........................................");
//     console.log("     `$(board7)`|`$(board8)`   |`$(board9)`");

// }
// board();
function doToss() {
     toss = Math.round(Math.random())
    //console.log(toss)

    if (toss == 0) {
//console.log('player won the toss and his  first');
    }
    else {
//console.log('system symbol');
    }
}
doToss();
// assigninig symbol for player and system
function symbolAssigning() {
    if(toss == player) {
        let symbol = prompt('Please select your symbol (X/O)');
        player_symbol = symbol;
        if(player_symbol == 'X') {
            system_symbol = 'O';
        }
        else {
            system_symbol = 'X';
        }
    }
    if(toss == system) {
        let chance = Math.round(Math.random());
        if(chance == 0) {
            system_symbol = 'X';
            player_symbol = 'O'
        }
        else {
            system_symbol = 'O';
            player_symbol = 'X';
        }
        }
        console.log('player symbol is ' + player_symbol);
        console.log('system symbol is ' + system_symbol);
    

    }
    
symbolAssigning();
