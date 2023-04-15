const params = new URLSearchParams(location.search);
let setName = params.get("set");
let allCards = params.get("cards");
let percOwned = Number(params.get("perc")) / 100;
let cardsOwned = params.get("owned");

let click = () => window.location = `trades.html?set=${setName}&cards=${allCards}&perc=${percOwned}&owned=${cardsOwned}`;

let all = [];
let owned = [];

let averageCardPrice = 14.38;

// { x: new Date(2017, 10, 1), y: 63 },

for (let month = 1; month < 13; month++) {
    averageCardPrice += Math.round(Math.random()) - 0.3;

    let ownedObj = {
        x: new Date(2022, month, 1),
        y: averageCardPrice * cardsOwned,
    };

    owned.push(ownedObj);

    averageCardPrice += Math.round(Math.random()) - 0.25;

    let allObj = {
        x: new Date(2022, month, 1),
        y: averageCardPrice * allCards,
    };

    allObj.indexLabel = `\u0394$${Math.round(allObj.y - ownedObj.y)}`;

    all.push(allObj);
}


window.onload = function () {

    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: `${setName} Price History`
        },
        axisX: {
            valueFormatString: "MMM YY"
        },
        axisY: {
            title: "Purchase Price",
            prefix: "$",
            minimum: 30
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: false
        },
        data: [
            {
                type: "line",
                showInLegend: true,
                name: `All ${setName} Cards`,
                markerType: "square",
                xValueFormatString: "DD MMM, YYYY",
                color: "#F08080",
                yValueFormatString: "$#,##0K",
                dataPoints: all
            },
            {
                type: "line",
                showInLegend: true,
                name: `Your ${setName} Cards`,
                lineDashType: "dash",
                yValueFormatString: "$#,##0K",
                dataPoints: owned
            }
        ]
    };


    $("#chartContainer").CanvasJSChart(options);
    $("#continue").on("click", click);
}


