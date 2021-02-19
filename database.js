// Our mock database (data gets lost when server stops running). If you want persistent storage, use a database such as Google Firebase or MongoDB.
const gamesDB = {
    1: {
        "name": "Fortnite",
        "price": 0,
        "notes": "Kinda weird"
    },
    2: {
        "name": "League of Legends",
        "price": 0,
        "notes": "toxic am i right"
    },
    3: {
        "name": "Super Smash Bros Ultimate",
        "price": 60,
        "notes": "top tier game"
    }
}

module.exports = gamesDB;