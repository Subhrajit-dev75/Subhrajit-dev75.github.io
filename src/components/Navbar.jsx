import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Listen for Firebase auth state changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const openAuthModal = (loginMode) => {
    setIsLoginMode(loginMode);
    setShowAuthModal(true);
  };

  return (
    <>
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand Name at Extreme Left */}
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">PhysicsMaster</h1>
          {/* Navbar options at Extreme Right */}
          <div className="flex gap-6">
            <Link
              to="/"
              className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="nav-link text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </Link>
            {user ? (
              // You might display a short text or icon for logged-in users.
              <span className="text-gray-600 dark:text-gray-300">Welcome</span>
            ) : (
              <button
                onClick={() => openAuthModal(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                Sign In/Sign Up
              </button>
            )}
          </div>
        </div>
        {/* Modal for Authentication */}
        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            isLogin={isLoginMode}
            toggleMode={() => setIsLoginMode(!isLoginMode)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
