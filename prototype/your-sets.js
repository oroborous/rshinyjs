function perc(part, whole) {
    return `${(part / whole * 100).toFixed(0)}%`;
}

window.onload = function () {

//Better to construct options first and then pass it as a parameter
    var options = {
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
                dataPoints: [
                    {y: 14, label: "Iceage", indexLabel: perc(14, 23), click: () => alert("Hi")},
                    {y: 30, label: "Urza's Saga", indexLabel: perc(30, 44)},
                    {y: 22, label: "Exodus", indexLabel: perc(22, 78)},
                    {y: 27, label: "Weatherlight", indexLabel: perc(27, 61)},
                    {y: 31, label: "Tempest", indexLabel: perc(31, 37)},
                    {y: 15, label: "Portal", indexLabel: perc(15, 61)},
                    {y: 25, label: "Mirage", indexLabel: perc(25, 73)},
                    {y: 17, label: "Alliances", indexLabel: perc(17, 101)},
                    {y: 39, label: "Homelands", indexLabel: perc(39, 54)},
                    {y: 48, label: "Chronicles", indexLabel: perc(48, 88)},
                    {y: 78, label: "Prophecy", indexLabel: perc(78, 121)}
                ],
            },
            {
                type: "column",
                showInLegend: true,
                name: "All Cards",
                axisYType: "secondary",
                color: "#F0D6A7",
                dataPoints: [
                    {y: 23, label: "Iceage"},
                    {y: 44, label: "Urza's Saga"},
                    {y: 78, label: "Exodus"},
                    {y: 61, label: "Weatherlight"},
                    {y: 37, label: "Tempest"},
                    {y: 61, label: "Portal"},
                    {y: 73, label: "Mirage"},
                    {y: 101, label: "Alliances"},
                    {y: 54, label: "Homelands"},
                    {y: 88, label: "Chronicles"},
                    {y: 121, label: "Prophecy"}
                ]
            }
        ]
    };

    $("#chartContainer").CanvasJSChart(options);
}


