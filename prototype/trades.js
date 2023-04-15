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
            name: "Your Trades",
            axisYType: "secondary",
            color: "#CD853F",
            dataPoints: owned,
        },
        {
            type: "column",
            showInLegend: true,
            name: "Cards to Buy",
            axisYType: "secondary",
            color: "#62C9C3",
            dataPoints: all
        }
    ]
};

window.onload = function () {
    $("#chartContainer").CanvasJSChart(options);
    $("#continue").on("click", click);

    const averageCardPrice = 14.38;

    let randomNumCards = Math.round(Math.random() * randomCards.length);
    randomCards.sort(() => Math.random() < 0.5 ? -1 : 1);

    for (let i = 0; i < randomNumCards; i++) {
        let randomCardName = randomCards[i];
        let randomPrice = averageCardPrice + ((Math.random() * 10) - 5)

    }
}
