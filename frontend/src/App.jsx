import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import BlockchainView from './components/BlockchainView';
import BalanceCheck from './components/BalanceCheck';
import MiningComponent from './components/MiningComponent';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/transactions" element={<TransactionForm />} />
                    <Route path="/blockchain" element={<BlockchainView />} />
                    <Route path="/balance" element={<BalanceCheck />} />
                    <Route path="/mine" element={<MiningComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;