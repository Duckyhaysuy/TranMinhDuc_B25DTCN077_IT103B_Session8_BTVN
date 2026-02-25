const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alison - Goalkeeper",
];

function filterPosition(position, players) {
    return players.filter(player => {
        let parts = player.split(" - ");
        return parts[1] === position;
    });
}

console.log("Forwards:"); console.log(filterPosition("Forward", players));       
console.log("Midfielders:");  console.log(filterPosition("Midfielder", players));
