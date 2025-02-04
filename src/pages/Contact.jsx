import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
