const players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alison",
];

function getUpperNames(players){
    return players.map(players => players.toUpperCase());
}

console.log(getUpperNames(players));
