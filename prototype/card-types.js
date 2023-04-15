window.onload = function () {

    let setNames = ["Artifact", "Battle", "Conspiracy", "Creature",
        "Dungeon", "Enchantment", "Instant", "Land", "Phenomenon",
        "Plane", "Planeswalker", "Scheme", "Socery", "Tribal",
        "Vanguard"];
    let all = [];
    let owned = [];


    for (let setName of setNames) {
        // average set contains 200 - 450 cards
        let totalCards = Math.floor(Math.random() * 250) + 200;
        let numOwned = Math.round(totalCards * Math.random());
        let percOwned = Math.round(numOwned / totalCards * 100);
        let click = () => window.location = `card-types.html?set=${setName}&cards=${totalCards}&perc=${percOwned.toFixed(1)}&owned=${numOwned}`;

        all.push({
            y: totalCards,
            label: setName,
            click: click
        });
        owned.push({
            y: numOwned,
            label: setName,
            indexLabel: `${percOwned}%`,
            click: click
        })
    }


    let options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Your Cards by Set"
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

    $("#chartContainer").CanvasJSChart(options);
}


