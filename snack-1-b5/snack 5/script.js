let pumpkins =
[
    {
        type: "Romanesca",
        weigth: 1,
        length: 10,
    },
    {
        type: "Trombetta",
        weigth: 3,
        length: 16,
    },
    {
        type: "Costata",
        weigth: 5,
        length: 15,
    },
    {
        type: "Crookneck",
        weigth: 9,
        length: 11,
    },
    {
        type: "Zucchini",
        weigth: 2,
        length: 10,
    },
    {
        type: "Altra",
        weigth: 1,
        length: 20,
    },
    {
        type: "Un'altra ancora",
        weigth: 10,
        length: 30,
    },
    {
        type: "Bho",
        weigth: 1,
        length: 100,
    },
    {
        type: "Ci sta",
        weigth: 3,
        length: 1,
    },
    {
        type: "Ma che ne so io",
        weigth: 1,
        length: 10,
    },
];

let sum = 0;
pumpkins.forEach(function(pumpkin)
{
    sum += pumpkin.weigth
});

console.log(sum);