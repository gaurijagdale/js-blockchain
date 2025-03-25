import React, { useEffect, useState } from 'react';
import { fetchBlockchainData } from '../services/api';

const BlockchainView = () => {
    const [blockchain, setBlockchain] = useState([]);

    useEffect(() => {
        const getBlockchainData = async () => {
            const data = await fetchBlockchainData();
            setBlockchain(data);
        };

        getBlockchainData();
    }, []);

    return (
        <div className="p-6 px-12 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-extrabold mb-6 text-indigo-700 border-b pb-3">Blockchain Explorer</h1>
            
            <div className="grid gap-6">
                {blockchain.map((block) => (
                    <div key={block.index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-indigo-500 text-white p-4 flex justify-between items-center">
                            <div className="font-bold text-lg">Block #{block.index}</div>
                            <div className="text-xs bg-indigo-800 px-3 py-1 rounded-full">{new Date(block.timestamp).toLocaleString()}</div>
                        </div>
                        
                        <div className="p-5">
                            <div className="mb-4">
                                <div className="text-sm text-gray-500 mb-1">Hash</div>
                                <div className="font-mono text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                                    {block.hash}
                                </div>
                            </div>
                            
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Transactions ({block.transactions.length})</div>
                                <div className="bg-gray-100 p-3 rounded max-h-40 overflow-y-auto">
                                    {block.transactions.length > 0 ? (
                                        block.transactions.map((tx, idx) => (
                                            <div key={idx} className="text-xs font-mono bg-white p-2 mb-2 rounded shadow-sm">
                                                {JSON.stringify(tx, null, 2)}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-400 text-center py-2">No transactions</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {blockchain.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <div className="text-xl mb-2">Loading blockchain data...</div>
                    <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto"></div>
                </div>
            )}
        </div>
    );
};

export default BlockchainView;