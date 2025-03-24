const Blockchain = require('./blockchain');

let myCrypto = new Blockchain();

console.log("Creating transactions...");
myCrypto.addTransaction({ from: "Alice", to: "Bob", amount: 50 });
myCrypto.addTransaction({ from: "Bob", to: "Charlie", amount: 30 });

console.log("\nMining pending transactions...");
myCrypto.minePendingTransactions("Miner1");

console.log("\nBalances:");
console.log("Alice's Balance:", myCrypto.getBalance("Alice"));
console.log("Bob's Balance:", myCrypto.getBalance("Bob"));
console.log("Charlie's Balance:", myCrypto.getBalance("Charlie"));
console.log("Miner's Balance:", myCrypto.getBalance("Miner1"));

console.log("\nMining another block...");
myCrypto.minePendingTransactions("Miner1");

console.log("\nUpdated Balances:");
console.log("Miner's Balance:", myCrypto.getBalance("Miner1"));
