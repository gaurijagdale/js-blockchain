const readline = require('readline-sync');
const Blockchain = require('./blockchain');

let myCrypto = new Blockchain();

console.log("\nWelcome to MyCrypto CLI!\n");

while (true) {
    console.log("\nChoose an option:");
    console.log("1. Create a transaction");
    console.log("2. Mine pending transactions");
    console.log("3. Check balance");
    console.log("4. View blockchain");
    console.log("5. Validate blockchain");
    console.log("6. Exit");

    let choice = readline.questionInt("\nEnter your choice: ");

    switch (choice) {
        case 1:
            let from = readline.question("Enter sender's name: ");
            let to = readline.question("Enter receiver's name: ");
            let amount = readline.questionInt("Enter amount: ");
            myCrypto.addTransaction({ from, to, amount });
            console.log(`\nTransaction added: ${from} → ${to}: ${amount} tokens\n`);
            break;

        case 2:
            let miner = readline.question("Enter miner's name: ");
            myCrypto.minePendingTransactions(miner);
            console.log(`\nMining complete! ${miner} received reward.\n`);
            break;

        case 3:
            let address = readline.question("Enter wallet name: ");
            console.log(`\nBalance of ${address}: ${myCrypto.getBalance(address)} tokens\n`);
            break;

        case 4:
            console.log("\nBlockchain:");
            console.log(JSON.stringify(myCrypto.chain, null, 4));
            break;

        case 5:
            console.log(`\nBlockchain valid: ${myCrypto.isChainValid() ? "Yes" : "No"}\n`);
            break;

        case 6:
            console.log("\nExiting MyCrypto CLI. Goodbye!\n");
            process.exit();

        default:
            console.log("\nInvalid choice, please try again.\n");
    }
}
