var m = 77;
var e = 88;
var s = 99;

function calculatePercentage(m, e, s) {
    var total = m + e + s;
    var percentage = (total / 300) * 100;
    return percentage;
}

var percentage = calculatePercentage(m, e, s);
console.log("Percentage: " + percentage + "%");