let bikes = 
[
    {
        name: "LowerBikeGIGI",
        weight: 30,
    },
    {
        name: "Capricciosa",
        weight: 10,
    },
    {
        name: "BikeSpeed",
        weight: 22,
    },
    {
        name: "Bumblebee",
        weight: 78,
    },
    {
        name: "Bho",
        weight: 12,
    },
    {
        name: "AnotherBike",
        weight: 43,
    },
    {
        name: "TheBigOne",
        weight: 300,
    },
];



//did they ask for find the bike with lower weight or simply doing the destructuring ? Dunno.
/* let lessWeightArray = bikes.filter(function(bike)
{
    if (bike.weight < )
    {
        return true;
    }
});
console.log(lessWeightArray); */

let {name,weight} = bikes[1];
console.log(`The bike with less weigth is ${name} with ${weight}`);