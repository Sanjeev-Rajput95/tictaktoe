const prompt = require('prompt-sync')({ sigint: true });
console.log('Welcome to tictaktoi game');
let player = 0;
let system = 1;
let player_symbol = ' ';
let system_symbol = ' ';
let toss;
let position_1 = 1;
let position_2 = 2;
let position_3 = 3;
let position_4 = 4;
let position_5 = 5;
let position_6 = 6;
let position_7 = 7;
let position_8 = 8;
let position_9 = 9;
function board() {
   

    console.log(` ${position_1} | ${position_2} | ${position_3} `);
    console.log(" .................");
    console.log(` ${position_4} | ${position_5} | ${position_6} `);
    console.log(" .................");
    console.log(` ${position_7} | ${position_8} | ${position_9} `);
    
    let cellNo = prompt('Pease enter cell number:');

}
function doToss() {
    toss = Math.round(Math.random())
}

//assigninig symbol for player and system
function symbolAssigning() {
    if (toss == player) {
        let symbol = prompt('Please select your symbol (X/O)');
        player_symbol = symbol;
        if (player_symbol == 'X') {
            system_symbol = 'O';
        }
        else {
            system_symbol = 'X';
        }
    }
    if (toss == system) {
        let chance = Math.round(Math.random());
        if (chance == 0) {
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
doToss();
symbolAssigning();
board();


