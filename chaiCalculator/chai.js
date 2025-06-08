function calculateChaiIngredients() {
    const cups = Number(numberOfCups);

    // Validate the input
    if (isNaN(cups) || cups <= 0) {
        console.log("Please enter a valid number.");
        return;
    }

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

const numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients();