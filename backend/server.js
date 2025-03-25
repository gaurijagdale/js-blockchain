const express = require('express');
const cors = require('cors');
const Blockchain = require('./blockchain');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize blockchain
const blockchain = new Blockchain();

// Middleware
app.use(cors());
app.use(express.json());

// Get the entire blockchain
app.get('/api/blockchain', (req, res) => {
  res.json(blockchain.chain);
});

// Get balance for an address
app.get('/api/balance/:address', (req, res) => {
  const address = req.params.address;
  const balance = blockchain.getBalance(address);
  res.json({ address, balance });
});

// Create a new transaction
app.post('/api/transactions', (req, res) => {
  const { from, to, amount } = req.body;
  
  if (!from || !to || !amount) {
    return res.status(400).json({ message: 'Missing required transaction fields' });
  }
  
  blockchain.addTransaction({ from, to, amount: parseInt(amount) });
  res.status(201).json({ message: 'Transaction added successfully' });
});

// Mine pending transactions
app.post('/api/mine', (req, res) => {
  const { miner } = req.body;
  
  if (!miner) {
    return res.status(400).json({ message: 'Miner address is required' });
  }
  
  blockchain.minePendingTransactions(miner);
  res.json({ 
    message: 'Block mined successfully', 
    blockHash: blockchain.getLatestBlock().hash 
  });
});

// Validate the blockchain
app.get('/api/validate', (req, res) => {
  const isValid = blockchain.isChainValid();
  res.json({ valid: isValid });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});