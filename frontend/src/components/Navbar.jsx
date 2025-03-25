import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path ? 
        'text-blue-400 font-medium' : 'text-gray-300 hover:text-white';
        
    const navItems = [
        { path: '/', label: 'Dashboard' },
        { path: '/transactions', label: 'Transactions' },
        { path: '/blockchain', label: 'Blockchain' },
        { path: '/balance', label: 'Check Balance' },
        { path: '/mine', label: 'Mine' }
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            MyCrypto
                        </div>
                    </div>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:flex">
                        <ul className="flex space-x-8">
                            {navItems.map(item => (
                                <li key={item.path}>
                                    <a 
                                        href={item.path} 
                                        className={`${isActive(item.path)} transition duration-300 py-2 px-1 relative group`}
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map(item => (
                                <li key={item.path}>
                                    <a 
                                        href={item.path} 
                                        className={`${isActive(item.path)} block py-1 transition duration-300`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;