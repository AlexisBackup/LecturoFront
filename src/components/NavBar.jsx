import React from 'react';
import { BookOpen, UserPlus, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';


export function NavBar({ darkMode, toggleDarkMode, setShowLogin, setShowRegister, user }) {

    const renderAuthButtons = () => (
        <>
            <button
                onClick={() => setShowLogin(true)}
                className={`px-4 py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
                Se connecter
            </button>
            <button
                onClick={() => setShowRegister(true)}
                className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg flex items-center space-x-2 transition-colors"
            >
                <UserPlus className="h-5 w-5" />
                <span>S'inscrire</span>
            </button>
        </>
    );

    return (
        <header className={`${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-sm`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <BookOpen className={`h-8 w-8 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
                    <span className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lecturo</span>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:opacity-80 transition-opacity`}
                    >
                        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                    {renderAuthButtons()}
                </div>
            </nav>
        </header>
    );
}