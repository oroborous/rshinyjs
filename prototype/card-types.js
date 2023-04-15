const params = new URLSearchParams(location.search);
let setName = params.get("set");
let allCards = params.get("cards");
let percOwned = Number(params.get("perc")) / 100;
let cardsOwned = params.get("owned");

let cardTypes = ["Artifact", "Creature",
    "Enchantment", "Instant", "Land", "Sorcery",
    "Battle", "Conspiracy", "Dungeon", "Phenomenon",
    "Plane", "Planeswalker", "Scheme", "Tribal",
    "Vanguard"];
let percents = [0.04, 0.23,
    0.21, 0.17, 0.09, 0.19,
    0.0, 0.01, 0.01, 0.01,
    0.01, 0.01, 0.01, 0.0,
    0.01
];
let cardsOfTypeInSet = [];
let totalSetCount = 0;
for (let perc of percents) {
    let count = Math.round(perc * allCards);
    cardsOfTypeInSet.push(count);
    totalSetCount += count;
}

cardsOfTypeInSet[1] += allCards - totalSetCount;

let all = [];
let owned = [];


for (let i = 0; i < cardTypes.length; i++) {
    let cardType = cardTypes[i];
    let totalCards = cardsOfTypeInSet[i];
    let numOwned = Math.round(cardsOfTypeInSet[i] * percOwned);
    let click = () => window.location = `price-history.html?set=${setName}&cards=${totalCards}&perc=${percOwned}&owned=${numOwned}`;

    all.push({
        y: totalCards,
        label: cardType,
        click: click
    });
    owned.push({
        y: numOwned,
        label: cardType,
        indexLabel: `${percOwned}%`,
        click: click
    })
}


let options = {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: `Your ${setName} Cards by Type`
    },
    axisY2: {
        lineThickness: 0
    },
    toolTip: {
        shared: true
    },
    legend: {
        verticalAlign: "top",
        horizontalAlign: "center"
    },
    data: [
        {
            type: "column",
            showInLegend: true,
            name: "Your Cards",
            axisYType: "secondary",
            color: "#7E8F74",
            dataPoints: owned,
        },
        {
            type: "column",
            showInLegend: true,
            name: "All Cards",
            axisYType: "secondary",
            color: "#F0D6A7",
            dataPoints: all
        }
    ]
};

window.onload = function () {

    $("#chartContainer").CanvasJSChart(options);
}


