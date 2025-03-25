import React from 'react';
import { FaExchangeAlt, FaChartLine, FaWallet, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const stats = [
        { title: 'Total Transactions', value: '254', icon: <FaExchangeAlt />, color: 'bg-blue-500' },
        { title: 'Blocks Mined', value: '36', icon: <FaChartLine />, color: 'bg-purple-500' },
        { title: 'Current Balance', value: '2.45 BTC', icon: <FaWallet />, color: 'bg-green-500' },
        { title: 'Pending Tx', value: '12', icon: <FaHistory />, color: 'bg-amber-500' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Blockchain Dashboard</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className={`${stat.color} p-3 rounded-lg mr-4 text-white`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.title}</p>
                                        <p className="text-2xl font-semibold">{stat.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Transactions */}
                    <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FaHistory className="mr-2 text-gray-600" /> Recent Transactions
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hash</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[1, 2, 3, 4].map((item) => (
                                        <tr key={item} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm font-mono">{`0x${Math.random().toString(16).substr(2, 8)}...`}</td>
                                            <td className="px-4 py-3 text-sm">{(Math.random() * 2).toFixed(5)} BTC</td>
                                            <td className="px-4 py-3 text-sm">{new Date().toLocaleTimeString()}</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Confirmed
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                        <div className="space-y-4">
                            <Link to="/transactions" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-center">
                                Create Transaction
                            </Link>
                            <Link to="/mine" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-center">
                                Mine Block
                            </Link>
                            <Link to="/blockchain" className="block w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-center">
                                View Blockchain
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;