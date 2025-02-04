import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

const Login = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {modalOpen && (
        <AuthModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isLogin={true}
          toggleMode={() => {}}
        />
      )}
    </div>
  );
};

export default Login;
