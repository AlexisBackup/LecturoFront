import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Library } from 'lucide-react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { NavBar } from './components/NavBar';
import { FlashMessage } from './components/FlashMessage';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import { useLocation } from 'react-router-dom';

function App({ loginAction, registerAction, flash, user }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [flashMessage, setFlashMessage] = useState(flash || null);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.flash) {
      setFlashMessage(location.state.flash);

      // Optionnel : nettoyage du flash message de l'historique pour éviter qu'il réapparaisse au refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);


  return (

    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>

      {/* Flash notification */}
      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          type={flashMessage.type}
          onClose={() => setFlashMessage(null)}
        />
      )}

      {/* Header/Navigation */}
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        user={user}
      />

      {/* Modal Forms */}
      {showLogin && <LoginForm action={loginAction} onClose={() => setShowLogin(false)} darkMode={darkMode} />}
      {showRegister && <RegisterForm action={registerAction} onClose={() => setShowRegister(false)} darkMode={darkMode} />}

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage darkMode={darkMode} setShowRegister={setShowRegister} />
          }
        />
        <Route path="/profile" element={<ProfilePage user={user} />} />
        {/* Tu pourras ajouter d'autres routes ici plus tard */}
      </Routes>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} mt-24`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Library className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lecturo</span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>© 2025 Lecturo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;