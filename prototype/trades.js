const params = new URLSearchParams(location.search);
let setName = params.get("set");
let allCards = params.get("cards");
let percOwned = Number(params.get("perc")) / 100;
let cardsOwned = params.get("owned");

// Thanks to https://www.seventhsanctum.com/generate.php?Genname=spell
let randomCards = ["Agile Traitors' Evocation of Nothing",
    "Caster's Glamour of Heat",
    "Ceremony of Seduce Good Elves",
    "Corrupt Caretakers' Exorcism of Misfortune",
    "Curse of Slay Humanoid",
    "Drakes' Gushes of Stone",
    "Ethereal Ritual of the Immovable Swords",
    "Field of Ancestral Telepathy",
    "Future Grail of Wind",
    "Gothic Barrier of Force",
    "Gushes of Immovable Metal",
    "Hellish Shields of Flesh",
    "Hypnotise Intelligent Seers",
    "Illusion of Call Vipers",
    "Portable Assault of Flaying",
    "Ritual of Conjuration",
    "Spectral Sigil of the Purple Portals",
    "The Infinite Divinations of Heat Transformation",
    "The Mystic Abjuration of Ruby",
    "The Mystical Calling of Platinum",
    "The Sixty Elemental Curses of Magma",
    "Trickery Conjuration",
    "Unholy Mana Assaults",
    "Wyrm Summoning",
    "Zones of Animate Magic",
    "Animals' Cowardice",
    "Archmagi' Sight",
    "Beam of Sapphire",
    "Beam of Time",
    "Beast's Levitation",
    "Become Saints",
    "Cold Shield",
    "Diamond Assaults",
    "Evocation of Wealth",
    "Gates of Gold",
    "Invocation of Deflection",
    "Krakens' Cunning",
    "Lantern Transformation",
    "Muck Webs",
    "Orbs of Earth",
    "Quester's Courage",
    "Spirit Web",
    "The Torch of Joiners",
    "Torch Cleaning",
    "Transmute Tiaras",
    "Venom Conjuration",
    "Wanderer's Serenity",
    "Witchery of Invisibility",
    "Witchery of Virtue",
    "Wounding Deflection"];


window.onload = function () {

    const averageCardPrice = 14.38;
    const costOfCardsToBuy = averageCardPrice * (allCards - cardsOwned);

    let randomNumCards = Math.round(Math.random() * randomCards.length);
    randomCards.sort(() => Math.random() < 0.5 ? -1 : 1);

    for (let i = 0; i < randomNumCards; i++) {
        let randomCardName = randomCards[i];
        let randomPrice = (averageCardPrice + ((Math.random() * 10) - 5)).toFixed(2);
        let randomCopies = Math.round(Math.random() * 12) + 4;

        let tr = `<tr><td><input type="checkbox"></td>
<td class="cardname">${randomCardName}</td>
<td class="price">${randomPrice}</td>
<td><input class="qty" type="number" value="${randomCopies}" min="0" max="${randomCopies}"></td></tr>`;

        $("tbody").append(tr);
    }

    let allObj = {
        y: costOfCardsToBuy,
        label: "Cards to Buy",
        indexLabel: `${costOfCardsToBuy.toFixed(0)}`,

    };

    let tradesObj = {
        y: 0,
        label: "Your Trades",
        indexLabel: `$0`,
    };

    let options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: `Trade Cards to Complete Your ${setName} Set`
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
                name: "Your Trades",
                axisYType: "secondary",
                color: "#CD853F",
                dataPoints: [tradesObj],
            },
            {
                type: "column",
                showInLegend: true,
                name: "Cards to Buy",
                axisYType: "secondary",
                color: "#62C9C3",
                dataPoints: [allObj]
            }
        ]
    };

    let saveTrade = () => {
        let trades = [];
        $("tbody").children().each( function() {
            let tr = $(this);
            let selected = tr.find(":checkbox").is(":checked");
            if (selected) {
                let cardname = tr.find(".cardname").text();
                let price = Number(tr.find(".price").text());
                let qty = Number(tr.find(".qty").val());
                trades.push({
                    cardname: cardname,
                    price: price,
                    quantity: qty
                })
            }
        });
        localStorage.setItem("trades", JSON.stringify(trades));
        window.location = `print.html?set=${setName}`;
    };

    let updateChart = (event) => {
        let tradeFunds = 0;
        $("tbody").children().each( function() {
            let tr = $(this);
            let selected = tr.find(":checkbox").is(":checked");
            if (selected) {
                let price = tr.find(".price").text();
                let qty = tr.find(".qty").val();
                tradeFunds += Number(price) * Number(qty);
            }
        });
        tradesObj.y = tradeFunds;
        tradesObj.indexLabel = (Number(tradesObj.indexLabel.substring(1)) + tradeFunds).toFixed(0);
        $("#chartContainer").CanvasJSChart().render();
    }

    $("input[type=number]").change(updateChart);
    $(":checkbox").change(updateChart);
    $("#print").click(saveTrade);

    $("#chartContainer").CanvasJSChart(options);
}
