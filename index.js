const gameboard = (() => {
    const array = ["","","","","","","","",""];
    return {array}
})()

const player = (score, turn, choiceType) => {
    const playerScore = score;
    const playerTurn = turn;
    const choice = choiceType;
    const updateTurn = (player, otherPlayer) => {
        player.playerTurn = !player.playerTurn;
        otherPlayer.playerTurn = !otherPlayer.playerTurn;
    }
    return {playerScore, playerTurn, choice, updateTurn}
}

function renderGame(){
    let element = document.querySelector('.container');

    for (let i = 0; i < gameboard.array.length; i++){
        let newElement = document.createElement('p')
        if (i < 3){
            newElement.style.gridRow = 1
        } else if (i < 6) {
            newElement.style.gridRow = 2
        } else {
            newElement.style.gridRow = 3
        }
        newElement.classList.add(`position-${i}`)
        newElement.textContent = gameboard.array[i]
        newElement.addEventListener("click", (event) => {
            updateGameboard(event)
        })
        element.appendChild(newElement);
    }
    
}

const player1 = player(0, true, "X");
const player2 = player(0, false, "O");

function updateGameboard(event){
    let playerType = checkPlayerTurn(player1, player2)
    if (event.target.textContent != "X" && event.target.textContent != "O"){
        event.target.textContent = playerType;
        player1.updateTurn(player1, player2)
    }
}

function checkPlayerTurn(player1, player2){
    if (player1.playerTurn == true){
        return player1.choice
    } else {
        return player2.choice
    }
}

renderGame();

/*
There should be a gameboard object.
On click, the gameboard should update based on who's turn it is.
Gameboard object should:
    1) maintain an array of player choices,
    2) the ability to check if a win condition has been met and who won,
    3) the ability to check if a draw condition has been met,
    4) the ability to track how many games have been played,
    5) the ability to reset when a game is over
There should be a player object.
Player objects should:
    1) keep track of the player's turn,
    2) keep track of player score,
    3) update player turn
Players interact with gameboards, and when the gameboard is altered, it changes a players turn.
The player should not be allowed to choose a position that is already taken.
*/