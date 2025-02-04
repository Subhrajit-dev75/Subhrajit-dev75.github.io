import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthModal = ({ isOpen, onClose, isLogin, toggleMode }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      } else {
        await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      }
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="auth-modal bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-2xl mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h2>
        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="p-2 border rounded"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="p-2 border rounded"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        {!isLogin && (
          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <span className="text-blue-500 cursor-pointer" onClick={toggleMode}>
              Log In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

