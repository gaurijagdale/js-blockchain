import React, { useState } from 'react';
import { checkBalance } from '../services/api';

const BalanceCheck = () => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');

    const handleCheckBalance = async () => {
        setError('');
        try {
            const result = await checkBalance(address);
            setBalance(result);
        } catch (err) {
            setError('Error fetching balance. Please try again.');
        }
    };

    return (
        <div className="h-screen px-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Check Wallet Balance</h2>
            
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter wallet address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                    />
                    {address && (
                        <button 
                            onClick={() => setAddress('')}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>
                
                <button
                    onClick={handleCheckBalance}
                    disabled={!address}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                        address 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {balance === null ? 'Check Balance' : 'Refresh Balance'}
                </button>
                
                {balance !== null && (
                    <div className="mt-6 p-4 bg-white rounded-lg shadow-inner border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700">Current Balance</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{balance} tokens</p>
                    </div>
                )}
                
                {error && (
                    <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                        <p className="font-medium">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BalanceCheck;