$(function () {
    const params = new URLSearchParams(location.search);
    let setName = params.get("set");
    let trades = localStorage.getItem("trades");

    if (setName) {
        $("title").text(`Your ${setName} Tradelist - MTG Collection Explorer`);
        $("h1").text(`Your ${setName} Tradelist`);
    }

    let tradesArray = trades ? tradesArray = JSON.parse(trades) : [];

    $("#json").html(`${JSON.stringify({
        user: "user@email.com",
        date: formatDate(new Date()),
        trades: tradesArray
    }, null, 3)}`).css({"font-family": "monospace"})
        .attr("rows", tradesArray.length * 5 + 6);
});

// https://bobbyhadz.com/blog/javascript-get-date-without-time
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
