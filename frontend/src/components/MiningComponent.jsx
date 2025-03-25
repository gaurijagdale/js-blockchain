import React, { useState } from 'react';

const MiningComponent = () => {
    const [minerName, setMinerName] = useState('');
    const [miningStatus, setMiningStatus] = useState('');

    const handleMining = async () => {
        setMiningStatus('Mining in progress...');
        // Call the API to mine a new block
        try {
            const response = await fetch('http://localhost:3001/api/mine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ miner: minerName }),
            });
            const data = await response.json();
            if (response.ok) {
                setMiningStatus(`Mining complete! Block mined: ${data.blockHash}`);
            } else {
                setMiningStatus(`Mining failed: ${data.message}`);
            }
        } catch (error) {
            setMiningStatus('An error occurred while mining.');
        }
    };

    return (
        <div className="mining-component h-screen px-12 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg shadow-md border border-gray-200 space-y-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">⛏️ Mine a New Block</h2>
            <div className="flex flex-col space-y-4"></div>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Enter miner's name"
                    value={minerName}
                    onChange={(e) => setMinerName(e.target.value)}
                    className="w-full border border-gray-300 p-3 pl-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 shadow-sm"
                />
            </div>
            <button
                onClick={handleMining}
                disabled={!minerName.trim()}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${minerName.trim() ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' : 'bg-gray-400 cursor-not-allowed text-gray-200'
                    }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                Start Mining
            </button>
            {miningStatus && (
                <div className={`mt-4 p-4 rounded-lg ${miningStatus.includes('complete') ? 'bg-green-100 text-green-800' : miningStatus.includes('failed') ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    <p className="font-medium">{miningStatus}</p>
                </div>
            )}
        </div>

    );
};

export default MiningComponent;