let randomCase = 
[
    "pippo",
    "pluto",
    "paperino",
    "CASTOLDE",
    "Gianfrancobaldo",
    "cristodellamadonnainfatuata"
];

let upperCase = randomCase.map(function(name)
{
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
});
console.log(upperCase);