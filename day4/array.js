Array=[10,20,30,40,50];
Array.push(60);
Array.pop();
Array.unshift(5);//push at starting index
Array.shift();//pop from start index
let date =new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log("Max = ", Math.max(10,20,30,40,50));
console.log("Min = ", Math.min(...Array));
console.log("Round = ", Math.round(4.5));
console.log("Floor = ", Math.floor(3.9));
console.log("Ceil = ", Math.ceil(2.0001));