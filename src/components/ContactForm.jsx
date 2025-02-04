import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contact: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message, please try again.');
      });
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        name="contact"
        placeholder="Your Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />
      <select 
        name="course" 
        value={formData.course} 
        onChange={handleChange} 
        className="p-2 border rounded"
        required
      >
        <option value="" disabled>Select Course</option>
        <option value="JEE Mains Physics">JEE Mains Physics</option>
        {/* Add more courses as needed */}
      </select>
      <textarea 
        name="message" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
        className="p-2 border rounded"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
