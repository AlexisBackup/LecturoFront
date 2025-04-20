import React, { useState } from 'react';
import { BookPlus, ScrollText, Library, Search, Plus, Settings, LogOut, User, BookOpen } from 'lucide-react';

export default function ProfilePage({ darkMode, user }) {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddSummary, setShowAddSummary] = useState(false);
  const [activeTab, setActiveTab] = useState('library'); // 'library' or 'settings'

  // Placeholder data for books
  const books = [
    {
      id: 1,
      title: "Le Comte de Monte-Cristo",
      author: "Alexandre Dumas",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      summary: false
    },
    {
      id: 2,
      title: "Les Misérables",
      author: "Victor Hugo",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
      summary: true
    },
    {
      id: 3,
      title: "Notre-Dame de Paris",
      author: "Victor Hugo",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
      summary: false
    }
  ];


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Side Navigation */}
      <div className={`fixed left-0 top-16 h-full w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className={`h-20 w-20 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
              <User className={`h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user.pseudo}</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('library')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'library'
                ? darkMode
                  ? 'bg-gray-700 text-white'
                  : 'bg-blue-50 text-blue-600'
                : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Ma bibliothèque</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'settings'
                ? darkMode
                  ? 'bg-gray-700 text-white'
                  : 'bg-blue-50 text-blue-600'
                : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </button>

            <button
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${darkMode
                ? 'text-red-400 hover:bg-gray-700'
                : 'text-red-600 hover:bg-gray-100'
                }`}
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </button>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6 mb-8`}>
          <div className="flex items-center space-x-4">
            <div className={`h-20 w-20 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
              <Library className={`h-10 w-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ma Bibliothèque</h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>3 livres · 1 résumé</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setShowAddBook(true)}
            className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-4 rounded-lg shadow-sm flex items-center justify-between transition-colors`}
          >
            <div className="flex items-center">
              <BookPlus className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ajouter un livre</span>
            </div>
            <Plus className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>

          <button
            onClick={() => setShowAddSummary(true)}
            className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-4 rounded-lg shadow-sm flex items-center justify-between transition-colors`}
          >
            <div className="flex items-center">
              <ScrollText className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Rédiger un résumé</span>
            </div>
            <Plus className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Rechercher un livre..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
            >
              <div className="relative h-48">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {book.summary && (
                  <div className="absolute top-2 right-2">
                    <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-full p-1`}>
                      <ScrollText className="h-4 w-4 text-blue-500" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{book.title}</h3>
                <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Book Modal */}
      {showAddBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 max-w-md w-full`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ajouter un livre</h2>
            <button
              onClick={() => setShowAddBook(false)}
              className={`absolute right-4 top-4 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Plus className="h-6 w-6 transform rotate-45" />
            </button>
            {/* Add form content here */}
          </div>
        </div>
      )}

      {/* Add Summary Modal */}
      {showAddSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 max-w-md w-full`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Rédiger un résumé</h2>
            <button
              onClick={() => setShowAddSummary(false)}
              className={`absolute right-4 top-4 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Plus className="h-6 w-6 transform rotate-45" />
            </button>
            {/* Add form content here */}
          </div>
        </div>
      )}
    </div>
  );
}