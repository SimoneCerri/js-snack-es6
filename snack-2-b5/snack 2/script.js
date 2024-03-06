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
        weigth: 30,
        length: 1,
    },
    {
        type: "Ma che ne so io",
        weigth: 100,
        length: 10,
    },
];

let sumBigger = 0;
let sumSmaller = 0

let bigger = pumpkins.filter(function(pumpkin)
{
    if (pumpkin.length >= 15)
    {
        return true;
        //sumBigger += pumpkin.lenght
    }
});
console.log(bigger);
//console.log(sumBigger);

let smaller = pumpkins.filter(function (pumpkin)
{
    if (pumpkin.length < 15)
    {
        return true;
        //sumSmaller += pumpkin.lenght
    }
});
console.log(smaller);
//console.log(sumSmaller);

bigger.forEach(function(pumpkin)
{
    sumBigger += pumpkin.length;
});

console.log(sumBigger);

smaller.forEach(function(pumpkin)
{
    sumSmaller += pumpkin.length;
});

console.log(sumSmaller);


