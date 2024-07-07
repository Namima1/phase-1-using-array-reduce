//.reduce() - reduces the elements of an array to a single value
//should have a `totalBatteries` variable
//should have a number as a result
//should have made the sum of all the assembled batteries

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBatteries);

//function getSum(accumulator, element) {
//    return Math.
//}
