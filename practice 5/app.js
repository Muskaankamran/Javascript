var firstRamadan = new Date("17 feb 2026")
console.log(firstRamadan.getTime());
var today = new Date()
console.log(today.getTime());

var difference= firstRamadan.getTime() - today.getTime()

var days = Math.round(difference / 86400000)
var months = difference / (1000 * 60 * 60 *24 *30)
console.log(Math.round(months));

console.log(days);
console.log(today.getFullYear())



var today = new Date()
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

