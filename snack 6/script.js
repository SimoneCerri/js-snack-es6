let teams = 
[
    {
        name: "Pieraccioni & co",
        points: 0,
        goals: 0,
        stadium: "Stadio Piera",
    },
    {
        name: "Paci & co",
        points: 0,
        goals: 0,
        stadium: "Stadio del Paci",
    },
    {
        name: "Ceccherini mostro",
        points: 0,
        goals: 0,
        stadium: "Stadio dei brutti",
    },
    {
        name: "Bho un'altro",
        points: 0,
        goals: 0,
        stadium: "Stadio fiero",
    },
    {
        name: "Squadra forte forte ma forte eh",
        points: 0,
        goals: 0,
        stadium: "Stadio dei più forti",
    },
    {
        name: "Gli scarsi",
        points: 0,
        goals: 0,
        stadium: "Campino dietro casa",
    },
    {
        name: "Un'altra squadra",
        points: 0,
        goals: 0,
        stadium: "Stadio altro",
    },
    {
        name: "Un'altra a caso",
        points: 0,
        goals: 0,
        stadium: "Stadio un'altro a caso",
    },
    {
        name: "Ultima squadra",
        points: 0,
        goals: 0,
        stadium: "Stadio ultimo",
    },
];

teams.map(function(team)
{
    team.points = Math.round(Math.random() * (100 - 1) + 1);
    team.goals = Math.round(Math.random() * (10 - 1) + 1);
});
console.log(teams);

let {}