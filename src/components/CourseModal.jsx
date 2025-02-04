import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseModal = ({ course, onClose, isLoggedIn }) => {
  const navigate = useNavigate();

  // Example description; customize as needed.
  const courseDescription =
    "This course covers key topics in JEE Mains Physics, including mechanics, optics, modern physics, and more.";

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="course-modal bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-300"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">
          {course === 'jee-physics' ? 'JEE Mains Physics' : 'Course Details'}
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{courseDescription}</p>
        {isLoggedIn ? (
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
            >
              Contact Us
            </button>
            <a
              href="https://drive.google.com/your-sample-video"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
            >
              A Sample Video
            </a>
          </div>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Log in / Sign up to know more
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseModal;
