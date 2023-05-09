const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    const allBatteries = currentValue + accumulator;
    return allBatteries;
},0);

console.log(totalBatteries)
