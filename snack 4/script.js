let people =
[
    {
        nome: "Simone",
        cognome: "Unknown",
        eta: 8,
    },
    {
        nome: "Francesco",
        cognome: "Tizio",
        eta: 17,
    },
    {
        nome: "Carlo",
        cognome: "Abbiocco",
        eta: 45,
    },
    {
        nome: "Giovanni",
        cognome: "Paciok",
        eta: 12,
    },
    {
        nome: "Salmo",
        cognome: "Lebon",
        eta: 66,
    },
];


let adultAge = people.map(function(person)
{
    if (person.eta >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(adultAge);