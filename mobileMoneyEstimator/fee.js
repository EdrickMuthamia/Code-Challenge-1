function estimateTransactionFee(amountToSend) {
    const amount = Number(amountToSend);

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        console.log("Tafadhali ingiza kiasi sahihi.");
        return;
    }

    // Calculate fee (1.5% of amount)
    let fee = amount * 0.015;

    // Apply minimum and maximum limits
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    const totalDebited = amount + fee;

    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log("Send Money Securely!");
}

// Prompt the user and call the function
const amountToSend = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(amountToSend);