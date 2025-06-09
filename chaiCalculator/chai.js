const readline = require('readline');

function calculateChaiIngredients(numberOfCups) {
    const cups = Number(numberOfCups);


    // Calculate the ingredients
    const water = 200 * cups;
    const milk = 50 * cups;
    const teaLeaves = 1 * cups;
    const sugar = 2 * cups;

    // Print the results
    console.log(`To make ${cups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (answer) => {
    calculateChaiIngredients(answer);
    rl.close();
});