const apiURL = 'http://localhost:3000/api/games'
const gamesDiv = document.getElementById("games-list");
// gamesDiv.appendChild(document.createTextNode("hello matey"));

console.log("making request now")

// The "then" clause tells Javascript to wait for the request to complete, then act on the data. (for more info, look up Javascript Promises)
axios.get(apiURL).then((res) => {
    // console.log(res.data);
    for (let gameID in res.data) {
        const game = res.data[gameID]
        
        // Create our DOM elements dynamically.
        const gameRow = document.createElement("div");
        for (let field in game) {
            const pEl = document.createElement("p");
            const text = document.createTextNode(game[field]);
            pEl.appendChild(text);
            gameRow.appendChild(pEl)
        }

        gamesDiv.appendChild(gameRow);
    }
})