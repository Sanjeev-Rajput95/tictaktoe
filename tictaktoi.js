const prompt = require('prompt-sync')({ sigint: true });
console.log('Welcome to tictaktoi game');
let player = 0;
let system = 1;
let player_symbol = ' ';
let system_symbol = ' ';
let toss;
let move = 0;
let breakLoop = false;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function board() {


    console.log(` ${array[1]} | ${array[2]} | ${array[3]} `);
    console.log(" .................");
    console.log(` ${array[4]} | ${array[5]} | ${array[6]} `);
    console.log(" .................");
    console.log(` ${array[7]} | ${array[8]} | ${array[9]} `);

}
function doToss() {
    toss = Math.round(Math.random())
}

//assigninig symbol for player and system
function symbolAssigning() {
    if (toss == player) {
        move = 10;
        let symbol = prompt('Please select your symbol (X/O)');
        player_symbol = symbol.toUpperCase();
        if (player_symbol == 'X') {
            system_symbol = 'O';
        }
        else {
            system_symbol = 'X';
        }
    }
    if (toss == system) {
        move = 11;
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
function playMove(cellno, symbol) {
    switch (cellno) {
        case 1: array[1] = symbol; break;
        case 2: array[2] = symbol; break;
        case 3: array[3] = symbol; break;
        case 4: array[4] = symbol; break;
        case 5: array[5] = symbol; break;
        case 6: array[6] = symbol; break;
        case 7: array[7] = symbol; break;
        case 8: array[8] = symbol; break;
        case 9: array[9] = symbol; break;

    }


}
function playerPlay() {
    board();
    let cell = prompt('Please select cell number :');
    let sys = player_symbol;
    playMove(parseInt(cell), sys);
    board();
    winner(sys);
    tieMatch();
}
function systemPlay() {
    let cell = Math.floor(Math.random() * 9 + 1);
    if (array[cell] == 'X' || array[cell] == 'O') {
        systemPlay();
    }

    let sym = system_symbol;
    playMove(cell, sym);
    board();
    winner(sym);
    tieMatch();


}
// Check winner 
function winner(sys) {
    let flag = false;
    if (array[1] == sys && array[2] == sys && array[3] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[1] == sys && array[4] == sys && array[7] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[1] == sys && array[5] == sys && array[9] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[2] == sys && array[5] == sys && array[8] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[3] == sys && array[6] == sys && array[9] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[3] == sys && array[5] == sys && array[7] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[4] == sys && array[5] == sys && array[6] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    else if (array[7] == sys && array[8] == sys && array[9] == sys) {
        console.log(".....you are won the match.....")
        breakLoop = true;
        flag = true;
    }
    board();
    return flag;
    

}
// Check tie match
function tieMatch() {
    let tie = true;
    for (let i = 1; i <= array.length - 1; i++) {
        if (array[i] == 1 || array[i] == 2 || array[i] == 3 || array[i] == 4 || array[i] == 5
            || array[i] == 6 || array[i] == 7 || array[i] == 8 || array[i] == 9) {
            tie = false;
        }

    }
    if (tie == true) {
        breakLoop = true;
        console.log("match tie");
    }
    else {
        console.log("match not tie ");

    }
}
// sytem play like me
function playLikeMe() {
    let cell;
    for (let i = 1; i < 10; i++) {
        if (array[i] != 'X' && array[i] != 'O') {
            cell = i;
            array[cell] = system_symbol;
            let result = winner(system_symbol);
            if (result == true) {
                console.log('system ');
                return;

            }
            else {
                array[cell] = i;
            }
        }
    }
    systemPlay();
}


doToss();
symbolAssigning();
board();
while (breakLoop == false) {
    if (move == 10) {
        playerPlay();
        move = 11;
    }
    if (move == 11) {
        playLikeMe();
        move = 10;
    }


}



