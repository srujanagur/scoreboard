let scoreboard = document.getElementById("scoreboard");
let saveBtn = document.getElementById("saveBtn");

let players = [
    {playerName: "Janne", score: 0},
    {playerName: "Kalle", score: 5},
    {playerName: "Anna", score: 6}
]

// SKRIV UT ALLA SPELARE

function printPlayers() {

    scoreboard.innerHTML = "";

    for (player in players) {
        //console.log("player", players[player]);
        let playerBox = document.createElement("div");
        playerBox.id = players[player].playerName;
        playerBox.classList = "player";
        playerBox.innerHTML = players[player].playerName + " | " + players[player].score + '<button class="inc">+</button> <button class="dec">-</button>';

        scoreboard.append(playerBox);
    }
}

printPlayers();

// FÅNGA ETT KLICK PÅ + ELLER -

scoreboard.addEventListener("click", (evt) => {
    // TA REDA PÅ VILKEN SPELARE
    // TA REDA PÅ + ELLER -

    //console.log("evt", evt.target.parentNode.id);

    if(evt.target.className === "inc" || evt.target.className === "dec") {
        //console.log("Klick bara på + ELLER -");
        changePlayerScore(evt.target.parentNode.id, evt.target.className);
    }


})

// ÄNDRA SCORE

function changePlayerScore(changePlayer, incDec) {
    console.log("Ändra Score", changePlayer, incDec);

    let player = players.find(({playerName}) => playerName === changePlayer);

    console.log("player", player);

    if(incDec === "inc") {
        player.score++
    } else {
        player.score--
    }

    printPlayers();
}

// LÄGG TILL NYA SPELARE

saveBtn.addEventListener("click", () => {

    const newPlayer = {
        playerName: document.getElementById("addNewPlayerName").value,
        score: 0
    }

    players.push(newPlayer);

    printPlayers();

})