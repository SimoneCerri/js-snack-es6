let cars = 
[
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "Benzina"
    },
    {
        marca: "Tesla",
        modello: "Model-S",
        alimentazione: "Elettrico"
    },
    {
        marca: "Lotus",
        modello: "bho",
        alimentazione: "Benzina"
    },
    {
        marca: "Porche",
        modello: "Carrera",
        alimentazione: "Benzina"
    },
    {
        marca: "Wolswagen",
        modello: "Golf",
        alimentazione: "Metano"
    },
    {
        marca: "Subaru",
        modello: "WRX STI",
        alimentazione: "Benzina"
    },
    {
        marca: "Mitsubishi",
        modello: "EVO Lancer",
        alimentazione: "Benzina"
    },
    {
        marca: "Lamborghini",
        modello: "Aventador",
        alimentazione: "Benzina"
    },
    {
        marca: "Ferrari",
        modello: "F-40",
        alimentazione: "Benzina"
    },
    {
        marca: "Mercedes",
        modello: "GLS",
        alimentazione: "Diesel"
    },
];

let petrol = cars.filter(function(car)
{
    if (car.alimentazione === "Benzina")
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(petrol);

let diesel = cars.filter(function(car)
{
    if (car.alimentazione === "Diesel")
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(diesel);

let carsUpdate = cars.filter(function (car)
{
    if (car.alimentazione !== "Diesel" && car.alimentazione !== "Benzina")
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(carsUpdate);