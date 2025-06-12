const readline = require('readline');

function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const distance = Number(distanceInKm);

    const fareForDistance = distance * chargePerKm;
    const totalFare = baseFare + fareForDistance;

    console.log(`Uko kwote? Io ni ${distance} km:;
    Ukikalia Pikipiki: KES ${baseFare};
    Mpaka Uko: KES ${fareForDistance};
    Total: KES ${totalFare}\n;
    Panda Pikipiki!`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (answer) => {
    calculateBodaFare(answer);
    rl.close();
});