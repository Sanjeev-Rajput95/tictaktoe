console.log('Welcome to tictaktoi game'); 
let player = 0;
let system = 1;
function board() {

    console.log("     |   |");
    console.log(" ...............");
    console.log("     |   |");
    console.log(" ...............");
    console.log("     |   |");

}
board();
function toss() {
    let toss = Math.round(Math.random())
    console.log(toss)

    if (toss == 0) {
        console.log('player won the toss and his chance first');
    }
    else {
        console.log('system chance');
    }
}
toss()