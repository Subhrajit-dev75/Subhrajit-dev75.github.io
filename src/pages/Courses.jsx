import React, { useState } from 'react';
import CourseModal from '../components/CourseModal';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Courses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user] = useAuthState(auth);

  const openModal = (courseId) => {
    setSelectedCourse(courseId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div
          className="course-card border rounded shadow-md hover:shadow-xl cursor-pointer transition duration-300 overflow-hidden"
          onClick={() => openModal('jee-physics')}
        >
          <img
            src="/assets/physics-course.jpg"
            alt="JEE Physics"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              JEE Mains Physics
            </h2>
          </div>
        </div>
        {modalOpen && (
          <CourseModal
            course={selectedCourse}
            onClose={closeModal}
            isLoggedIn={!!user}
          />
        )}
      </div>
    </div>
  );
};

export default Courses;
