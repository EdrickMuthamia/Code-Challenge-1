const readline = require('readline');

function estimateTransactionFee(amountToSend) {
    const amount = Number(amountToSend);

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Unatuma Ngapi? (KES): ", (answer) => {
    estimateTransactionFee(answer);
    rl.close();
});