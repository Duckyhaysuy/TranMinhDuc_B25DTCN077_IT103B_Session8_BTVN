const players = [
    "Messi - FW - 30",
    "Ronaldo - FW - 28",
    "Neymar - FW - 20",
    "De Bruyne - MF - 15",
    "Kante - MF - 5",
    "Van Dijk - DF - 4",
    "Alisson - GK - 0"
];

function getReversedNames(players) {
    return players.map(player => player.split(" - ")[0]).reverse(); 
}
console.log(getReversedNames(players));