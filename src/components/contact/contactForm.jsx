import { useForm } from 'react-hook-form';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Format the message for WhatsApp
      const whatsappMessage = 
        `New Contact Form Submission\n\n` +
        `*Name:* ${data.name}\n` +
        `*Subject:* ${data.subject}\n\n` +
        `*Message:*\n${data.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Replace with your WhatsApp number (include country code without +)
      const whatsappNumber = '254710815080';
      
      // Create WhatsApp link
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open in new tab
      window.open(whatsappUrl, '_blank');

      toast.success('Redirecting to WhatsApp...');
      reset();
    } catch (error) {
      toast.error('Failed to prepare WhatsApp message. Please try again.');
    }
  };

  return (
    <motion.div 
      className="md:p-8 p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl shadow-slate-900/50 w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <FaWhatsapp className="text-3xl text-cyan-500" />
        <h2 className="text-2xl font-bold text-white">Contact via WhatsApp</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-1">
            Your Name
          </label>
          <input
            id="name"
            className={`w-full px-4 py-2 bg-slate-800 border ${
              errors.name ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
            type="text"
            placeholder="John Doe"
            {...register('name', { 
              required: 'Name is required',
              maxLength: {
                value: 100,
                message: 'Name should not exceed 100 characters'
              }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="subject" className="block text-sm font-medium text-cyan-300 mb-1">
            Subject
          </label>
          <input
            id="subject"
            className={`w-full px-4 py-2 bg-slate-800 border ${
              errors.subject ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
            type="text"
            placeholder="Regarding your services"
            {...register('subject', { 
              required: 'Subject is required',
              maxLength: {
                value: 200,
                message: 'Subject should not exceed 200 characters'
              }
            })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            className={`w-full px-4 py-2 bg-slate-800 border ${
              errors.message ? 'border-red-500' : 'border-slate-700'
            } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all`}
            placeholder="Hello, I'm interested in..."
            rows="4"
            {...register('message', { 
              required: 'Message is required',
              maxLength: {
                value: 1000,
                message: 'Message should not exceed 1000 characters'
              }
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-cyan-500/30'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {isSubmitting ? (
            'Preparing WhatsApp...'
          ) : (
            <>
              Send via WhatsApp <FaPaperPlane className="ml-2" />
            </>
          )}
        </motion.button>
      </form>

      <motion.p 
        className="mt-6 text-center text-sm text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        You will be redirected to WhatsApp to complete sending your message.
      </motion.p>
    </motion.div>
  );
};

export default ContactForm;