import React, { useState } from 'react';
import { submitTransaction } from '../services/api';

const TransactionForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (from && to && amount) {
            submitTransaction({ from, to, amount })
            setFrom('');
            setTo('');
            setAmount('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-bold mb-4">Create Transaction</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
                    From
                </label>
                <input
                    type="text"
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
                    To
                </label>
                <input
                    type="text"
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default TransactionForm;