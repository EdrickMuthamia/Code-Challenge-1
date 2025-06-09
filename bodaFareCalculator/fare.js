const readline = require('readline');

function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const distance = Number(distanceInKm);

    const fareForDistance = distance * chargePerKm;
    const totalFare = baseFare + fareForDistance;

    console.log(`Uko kwote? Io ni ${distance} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${fareForDistance}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (answer) => {
    calculateBodaFare(answer);
    rl.close();
});