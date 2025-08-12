import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_e7ne9rd',       
      'template_q26i4rs',      
      formRef.current,
      'j3tczE-e-yRu-EPtN'        // ✅ replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      setLoading(false);
      formRef.current.reset();
    }, (error) => {
      console.error(error.text);
      setLoading(false);
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        We'd love to hear from you! Feel free to reach out with questions, feedback, or partnership opportunities.
      </p>

      {isSent && (
        <div className="mb-6 text-green-600 font-semibold bg-green-100 p-4 rounded-md shadow">
          ✅ Your message has been sent successfully!
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
