import { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const subject = form.current.subject.value.trim();
    const messageContent = form.current.message.value.trim();

    if (!name || !email || !subject || !messageContent) {
      toast.error('Please fill in all fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:p-6 p-4 bg-slate-900 rounded-xl shadow-xl shadow-slate-800 w-full">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            name="name"
            placeholder="Enter name..."
            required
            maxLength="100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            name="email"
            placeholder="Enter email..."
            required
            maxLength="100"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
            Subject
          </label>
          <input
            id="subject"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            name="subject"
            placeholder="Enter subject..."
            required
            maxLength="200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            name="message"
            placeholder="Enter Message..."
            rows="4"
            required
            maxLength="1000"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition duration-300 flex items-center justify-center ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
          <FaPaperPlane className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;