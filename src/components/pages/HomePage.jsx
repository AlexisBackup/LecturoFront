import React, { useState } from 'react';
import { BookmarkCheck, Star, BookPlus, ScrollText } from 'lucide-react';

function HomePage() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl`}>
            Suivez vos lectures,{' '}
            <span className={darkMode ? 'text-gray-400' : 'text-gray-700'}>partagez vos découvertes</span>
          </h1>
          <p className={`mt-3 max-w-md mx-auto text-base ${darkMode ? 'text-gray-300' : 'text-gray-500'} sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
            Organisez votre bibliothèque personnelle, suivez votre progression et gardez une trace de toutes vos lectures.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <button
              onClick={() => setShowRegister(true)}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Commencer gratuitement
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
            <div className="absolute -top-4 left-4">
              <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3`}>
                <BookPlus className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
              </div>
            </div>
            <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ajoutez vos livres</h3>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Enregistrez tous vos livres : romans, mangas, BD, documents techniques.
            </p>
          </div>

          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
            <div className="absolute -top-4 left-4">
              <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3`}>
                <BookmarkCheck className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
              </div>
            </div>
            <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Suivez votre progression</h3>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Marquez votre avancement et reprenez votre lecture là où vous l'aviez laissée.
            </p>
          </div>

          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
            <div className="absolute -top-4 left-4">
              <div className={`rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3`}>
                <ScrollText className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
              </div>
            </div>
            <h3 className={`mt-8 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Rédigez des résumés</h3>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Gardez une trace de vos impressions et partagez vos avis avec la communauté.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
            Découvrez votre prochaine lecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                title: "L'Étranger",
                author: "Albert Camus",
                cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
                rating: 4.7
              },
              {
                id: 2,
                title: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80",
                rating: 4.9
              },
              {
                id: 3,
                title: "Madame Bovary",
                author: "Gustave Flaubert",
                cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
                rating: 4.5
              },
              {
                id: 4,
                title: "Les Fleurs du Mal",
                author: "Charles Baudelaire",
                cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
                rating: 4.8
              }
            ].map((book) => (
              <div key={book.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden`}>
                <img
                  src={book.cover}
                  alt={`Couverture de ${book.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{book.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className={`ml-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{book.rating}</span>
                    </div>
                  </div>
                  <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );

}

export default HomePage;